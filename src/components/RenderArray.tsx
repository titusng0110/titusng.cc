import React from "react"

interface RenderArrayProps {
  items: number[];
}

export function RenderArray({items}: RenderArrayProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )

}