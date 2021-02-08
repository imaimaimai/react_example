// Modules
import React, { useState, useEffect } from 'react'

export default function Menu () {
  // *************** JSX *************** //
  const [isText, setIstext] = useState(1)
  console.log(isText)

  // ロードしたら発火される
  useEffect(() => {
    setIstext(55)
    // 中括弧の中の値が変わるとuseEffect発火
  }, [])
  
  const clickText = () => {
    //Todo 2回実行される(なぜか)
    // isTextの値を変える
    // setIstext(55)
  }

  // *************** JSX *************** //

  // returnを書かないとJSXが書けない
  return (
    <div className="menuComponent">
      <p onClick={clickText}>{isText}</p>
    </div >
  )
}