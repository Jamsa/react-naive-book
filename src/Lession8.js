import React, { Component } from 'react';

/*
export default class Header extends Component{
    render(){
        return (
        <div>
            <h1>React 小书</h1>
        </div>
        )
    }
}
*/

function renderGoodWord(goodWord, badWord) {
    const isGoodWord = true
    return isGoodWord ? goodWord : badWord
}

class Title extends Component{
    handleClickOnTitle(e){
        console.log('Click on title')
        console.log(e.target.innerHTML)
        console.log('this:',this)
    }

    handleClickOnTitle1(e){
        console.log('Click on title')
        console.log(e.target.innerHTML)
        console.log('this:',this)
    }

    render(){
        return (
        <div>
        <h1 onClick={this.handleClickOnTitle}>Title</h1>
        <h1 onClick={this.handleClickOnTitle1.bind(this)}>Title2</h1>
        </div>
        )
    }
}

function Main(){
    return (
        <h2>Main content</h2>
    )
}

function Footer(){
    return (
        <h2>Footer</h2>
    )
}

function Header(){
    const word = 'is good'

    return (
        <div>
            <h1>React 小书 {word} </h1>
            <p>{(function () { return 'hello from inline function'})()}</p>
            <p>{renderGoodWord(
                <div>render good word</div>,
                <div>render is not good word</div>,
            )}</p>
            <p>
                <Title/>
            </p>
        </div>
        ) 
}

export default function Index(){
    return (
        <div>
        <Header />
        <Main />
        <Footer />
        </div>
    )
}

