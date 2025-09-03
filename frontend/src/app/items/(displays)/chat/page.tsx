'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUp } from 'lucide-react';

const ChatContent = () => {
  const [prompt, setPrompt] = useState<string>("")

  function handleSubmitInput() {
    console.log("submit input", prompt)
  }

  return (
    <div className='flex flex-col gap-4 p-4 justify-center align-center w-full h-[100vh] bg-[#fcfbfb]'>
      <header>Hello</header>
      <div className='flex flex-col justify-between h-[140px] rounded-xl border border-gray-300 bg-white p-[10px]'>
        <Input
          name="prompt"
          placeholder='輸入一條信息......'
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && prompt.trim() !== "") {
              e.preventDefault();
              handleSubmitInput();
            }
          }}
        />
        <div className='flex flex-row justify-end h-auto gap-4'>
          <Button className="w-10 h-10 rounded-full p-0 bg-black hover:bg-neutral-700"
            onClick={handleSubmitInput}
          >
            <ArrowUp className="text-white size-6"/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChatContent