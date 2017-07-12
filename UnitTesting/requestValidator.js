function validateRequest(object) {

    let uriPattern = /^([\.\w]+)$|^(\*)$/;
    let messagePattern = /^[^\<\>\\\&'"]+$/;

    if(object.method !== "GET" && object.method !== "POST" && object.method !== "DELETE" && object.method !== "CONNECT"){
        throw new Error("Invalid request header: Invalid Method")
    }

    if(!uriPattern.test(object.uri) || object.uri === undefined){
        throw new Error("Invalid request header: Invalid URI")
    }
    
    if(object.version !== 'HTTP/0.9' && object.version !== 'HTTP/1.0' && object.version !== 'HTTP/1.1' && object.version !== 'HTTP/2.0'){
        throw new Error("Invalid request header: Invalid Version")
    }
    if(!messagePattern.test(object.message) && object.message != '' || object.message === undefined){
        throw new Error("Invalid request header: Invalid Message")
    }

    return object;

}

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'asl<pls'
});

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
