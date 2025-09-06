function Outer(){
    const name = 'sid'
    function Inner(){
        console.log(name)
    }
    Inner()
}

const name = Outer()
console.log(name)