alert(888)
if(true) import('./6_4.js').then(function(m){
    console.info("m:")
    console.info(m)
    console.info(m.default)
    console.info(m.a)
    console.info(m.b)
}).catch(function(e){
    console.info(e)
})