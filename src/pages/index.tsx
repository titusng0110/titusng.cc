import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { RenderArray } from '/src/components/RenderArray'


const IndexPage: React.FC<PageProps> = () => {
  const [state, setState] = React.useState<number>(0)
  const [primeNumbers, setPrimeNumbers] = React.useState<number[]>([])
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        let temp:number[] = []
        for(let i = 2; i <= state; i++) {
          let isPrime = true
          for(let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
            if(i % j === 0) {
              isPrime = false
              break
            }
          }
          if(isPrime) {
            temp.push(i)
          }
        }
        console.log(temp)
        setPrimeNumbers(temp)
      }}>
        <div className="container mx-auto p-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-sm">
            <Label htmlFor="state" className="whitespace-nowrap">
              Prime numbers until:
            </Label>
            <Input 
              id="state" 
              name="state" 
              type="text" 
              value={state} 
              onChange={(e) => {
                const value = parseInt(e.target.value, 10)
                if (value >= 0 && value <= 10000) {
                  setState(value)
                }
                else {
                  setState(0)
                }
              }}
            />
            <Button type="submit">Calculate</Button>
          </div>
        </div>
      </form>
      <RenderArray items={primeNumbers} />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
