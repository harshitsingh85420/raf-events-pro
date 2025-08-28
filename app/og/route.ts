import { ImageResponse } from 'next/og'
export const runtime = 'edge'
export const alt = 'RAF Signature Events'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function GET() {
  return new ImageResponse(
    (<div style={{
      fontSize: 64,
      fontFamily: 'Inter, system-ui, sans-serif',
      background: '#0B132B',
      color: '#FFF7ED',
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      RAF Signature Events
    </div>),
    { ...size }
  )
}
