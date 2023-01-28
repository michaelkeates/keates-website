import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { HemisphereLight } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { ModelSpinner, ModelContainer } from './model-loader'

var mixer, clock

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Model = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(-0, 0.7, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })

      clock = new THREE.Clock()

      var loader = new GLTFLoader()

      loader.load('/models/test.glb', function (gltf) {
        let model = gltf.scene
        mixer = new THREE.AnimationMixer(gltf.scene)

        gltf.animations.forEach(clip => {
          mixer.clipAction(clip).play()
          animate()
          setLoading(false)
        })

        model.traverse(function (node) {
          if (node.isMesh) {
            node.castShadow = true
          }
        })
        scene.add(gltf.scene)
      })

      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.physicallyCorrectLights = true
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 3.8
      renderer.outputEncoding = THREE.sRGBEncoding
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      renderer.setClearColor(0x000000, 0)

      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.0009 + 1.6
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      //const ambientLight = new THREE.AmbientLight(0xcccccc, 1)

      //scene.add(ambientLight)

      const geometry = new THREE.PlaneGeometry(6, 6, 32)
      geometry.rotateX(-Math.PI / 2)
      const material = new THREE.ShadowMaterial()
      material.opacity = 0.2
      const plane = new THREE.Mesh(geometry, material)
      plane.receiveShadow = true
      scene.add(plane)

      // DIRECTIONAL LIGHT
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.x += 20
      directionalLight.position.y += 20
      directionalLight.position.z += 20
      directionalLight.castShadow = true
      directionalLight.shadow.mapSize.width = 4096
      directionalLight.shadow.mapSize.height = 4096
      const d = 25
      directionalLight.shadow.camera.left = -d
      directionalLight.shadow.camera.right = d
      directionalLight.shadow.camera.top = d
      directionalLight.shadow.camera.bottom = -d
      scene.add(directionalLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)

      let req = null
      let frame = 0

      const animate = () => {
        req = requestAnimationFrame(animate)

        var delta = clock.getDelta()

        if (mixer) mixer.update(delta)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        console.log('unmount')
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <ModelContainer ref={refContainer}>
      {loading && <ModelSpinner />}
    </ModelContainer>
  )
}

export default Model
