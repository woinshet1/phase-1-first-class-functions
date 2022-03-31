function spy(someValue){
    return someValue
}

function receivesAFunction(anyThing){
    anyThing()
}

const someThing = something => "something"

function returnsANamedFunction(){
    return someThing
}

function returnsAnAnonymousFunction(){
    return function(){}
}