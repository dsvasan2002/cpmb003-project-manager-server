node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

        def customImage = docker.build("dsvasan2002/dockernodeapp")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
