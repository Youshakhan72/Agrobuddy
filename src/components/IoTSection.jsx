import React, { useState, useEffect, useRef } from 'react'

function Cube3D() {
  return (
    <div className="w-28 h-28 perspective-400">
      <div className="cube relative w-full h-full transform-style preserve-3d animate-spin-slow">
        <div className="face front absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-400 border border-yellow-600 rounded-md"></div>
        <div className="face back absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 border border-yellow-600 rounded-md transform rotate-y-180"></div>
        <div className="face right absolute inset-0 bg-gradient-to-br from-yellow-250 to-yellow-450 border border-yellow-600 rounded-md transform rotate-y-90"></div>
        <div className="face left absolute inset-0 bg-gradient-to-br from-yellow-250 to-yellow-450 border border-yellow-600 rounded-md transform rotate-y-270"></div>
        <div className="face top absolute inset-0 bg-gradient-to-br from-yellow-150 to-yellow-350 border border-yellow-600 rounded-md transform rotate-x-90"></div>
        <div className="face bottom absolute inset-0 bg-gradient-to-br from-yellow-150 to-yellow-350 border border-yellow-600 rounded-md transform rotate-x-270"></div>
      </div>
    </div>
  )
}

function format(v) {
  return Math.round(v * 10) / 10
}

export default function IoTSection() {
  
  const [devices, setDevices] = useState([])
  const nextId = useRef(1)

  useEffect(() => {
    return () => {
      devices.forEach((d) => clearInterval(d._int))
    }
  }, [devices])

  function addDevice() {
    const id = nextId.current++
    const device = {
      id,
      name: `Device-${id}`,
      online: true,
      telemetry: {
        soilMoisture: 40 + Math.random() * 30,
        temp: 20 + Math.random() * 8,
        humidity: 40 + Math.random() * 30,
      },
    }

    // start simulator
    const int = setInterval(() => {
      setDevices((prev) =>
        prev.map((p) => {
          if (p.id !== id) return p
          const t = p.telemetry
          const next = {
            soilMoisture: Math.max(0, Math.min(100, t.soilMoisture + (Math.random() - 0.45) * 4)),
            temp: Math.max(-10, Math.min(60, t.temp + (Math.random() - 0.5) * 0.8)),
            humidity: Math.max(0, Math.min(100, t.humidity + (Math.random() - 0.5) * 1.2)),
          }
          return { ...p, telemetry: next }
        })
      )
    }, 2000)

    device._int = int
    setDevices((d) => [...d, device])
  }

  function removeDevice(id) {
    setDevices((prev) => {
      prev.forEach((p) => {
        if (p.id === id && p._int) clearInterval(p._int)
      })
      return prev.filter((p) => p.id !== id)
    })
  }

  function toggleOnline(id) {
    setDevices((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p
        if (p.online) {
          clearInterval(p._int)
          return { ...p, online: false }
        } else {
          // restart simulator
          const int = setInterval(() => {
            setDevices((curr) =>
              curr.map((c) => {
                if (c.id !== id) return c
                const t = c.telemetry
                const next = {
                  soilMoisture: Math.max(0, Math.min(100, t.soilMoisture + (Math.random() - 0.45) * 4)),
                  temp: Math.max(-10, Math.min(60, t.temp + (Math.random() - 0.5) * 0.8)),
                  humidity: Math.max(0, Math.min(100, t.humidity + (Math.random() - 0.5) * 1.2)),
                }
                return { ...c, telemetry: next }
              })
            )
          }, 2000)
          return { ...p, online: true, _int: int }
        }
      })
    )
  }

  return (
    <div className="max-w-6xl mx-auto py-24 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">IoT Devices (Simulated)</h2>
        <div className="space-x-2">
          <button onClick={addDevice} className="px-3 py-2 bg-agri-green text-white rounded">Add Device</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devices.map((d) => (
          <div key={d.id} className="p-4 bg-white rounded shadow-sm flex items-center space-x-4">
            <Cube3D />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">{d.name}</div>
                  <div className={`text-sm ${d.online ? 'text-green-600' : 'text-red-500'}`}>{d.online ? 'Online' : 'Offline'}</div>
                </div>
                <div className="text-right">
                  <button onClick={() => toggleOnline(d.id)} className="text-sm text-gray-600 hover:underline">
                      {d.online ? 'Pause' : 'Resume'}
                  </button>
                  <div>
                    <button onClick={() => removeDevice(d.id)} className="text-sm text-red-500 hover:underline">Remove</button>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                <div className="bg-gray-50 p-2 rounded text-center">
                  <div className="text-xs text-gray-500">Soil (%)</div>
                  <div className="font-semibold">{format(d.telemetry.soilMoisture)}</div>
                </div>
                <div className="bg-gray-50 p-2 rounded text-center">
                  <div className="text-xs text-gray-500">Temp (°C)</div>
                  <div className="font-semibold">{format(d.telemetry.temp)}</div>
                </div>
                <div className="bg-gray-50 p-2 rounded text-center">
                  <div className="text-xs text-gray-500">Humidity (%)</div>
                  <div className="font-semibold">{format(d.telemetry.humidity)}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {devices.length === 0 && (
        <div className="mt-8 text-center text-gray-500">No devices yet — click "Add Device" to create simulated IoT units.</div>
      )}

      <style>{`
        .perspective-400 { perspective: 600px; }
        .transform-style { transform-style: preserve-3d; }
        .cube { transition: transform 0.5s; }
        .cube .face { position: absolute; backface-visibility: hidden; }
        .animate-spin-slow { animation: spin 12s linear infinite; }
        @keyframes spin { from { transform: rotateX(-20deg) rotateY(0deg); } to { transform: rotateX(-20deg) rotateY(360deg); } }
      `}</style>
    </div>
  )
}
