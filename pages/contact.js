import Head from 'next/head'
import React, { useState } from 'react'
import { Input } from '../components/primitives/input'
import { Textarea } from '../components/primitives/textarea'

export default function Contact () {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: ''
  })

  const handleSubmit = () => {
    console.log(formData)
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        text: formData.text
      })
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="w-full h-full grid grid-cols-6 self-center">
      <Head>
        <title>Contact - Ashley Isles</title>
      </Head>
      <div className="col-start-2 col-span-4 col-end-6">
        <div>
          <h1 className="text-black dark:text-white text-6xl font-bold font-display text-center">Talk to me.</h1>
          <p className="text-gray-600 text-xl text-center my-10 dark:text-gray-300">Let’s work together! Feel free to message me here or on social media <a className="text-brand font-semibold hover:underline cursor-pointer">@islesdotdev</a>.</p>
        </div>
        <div className="grid gap-4">
          <Input placeholder="Name" onChange={text => setFormData({...formData, name: text})}></Input>
          <Input placeholder="Email" type="email" onChange={text => setFormData({...formData, email: text})}></Input>
          <Textarea placeholder="Message" onChange={text => setFormData({...formData, text: text})}></Textarea>
          <button onClick={() => handleSubmit()} className="bg-brand justify-self-end text-white rounded-lg leading-10 px-4 w-40">Submit</button>
        </div>
      </div>
    </div>
  )
}
