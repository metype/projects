        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true);

        var createScene = function () {
        
            // Create the scene space
            var scene = new BABYLON.Scene(engine);
        
            // Add a camera to the scene and attach it to the canvas
            var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(5, 1, -5), scene);
            camera.attachControl(canvas, true);
            scene.gravity = new BABYLON.Vector3(0, -0.9, 0);
            camera.ellipsoid = new BABYLON.Vector3(2, 1, 2);
            camera.rotation = scene.activeCamera.rotation;
            camera.checkCollisions = scene.activeCamera.checkCollisions;
            camera.applyGravity = scene.activeCamera.applyGravity;
            scene.collisionsEnabled = true;
            camera.checkCollisions = true;
            camera.applyGravity = true;
            camera.keysUp.push(87);    //W
            camera.keysDown.push(83)   //D
            camera.keysLeft.push(65);  //A
            camera.keysRight.push(68); //S
        
            // Add lights to the scene
           	var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, 1, 0), scene);
        	light.diffuse = new BABYLON.Color3(0, 1, 0);
        	light.specular = new BABYLON.Color3(0, 0, 0);
        	light.groundColor = new BABYLON.Color3(0, 0, 0);
            
            // Add colors
        
            var greenMat = new BABYLON.StandardMaterial("redMat", scene);
        	greenMat.ambientColor = new BABYLON.Color3(0, 1, 0);
        
            var redMat = new BABYLON.StandardMaterial("redMat", scene);
        	redMat.ambientColor = new BABYLON.Color3(1, 0, 0);
            redMat.alpha = 0
        
            var blueMat = new BABYLON.StandardMaterial("redMat", scene);
        	blueMat.ambientColor = new BABYLON.Color3(0, 0, 1);
        
            var PMat = new BABYLON.StandardMaterial("redMat", scene);
        	PMat.ambientColor = new BABYLON.Color3(1, 0, 1);
        
            var YMat = new BABYLON.StandardMaterial("greenmatMat", scene);
        	YMat.ambientColor = new BABYLON.Color3(0, 0, 0);

            var grassMaterial = new BABYLON.StandardMaterial(name + "bawl", scene);
            var grassTexture = new BABYLON.GrassProceduralTexture(name + "textbawl", 256, scene);
            grassMaterial.ambientTexture = grassTexture;
        
            // This is where you create and manipulate meshes
            var wall = BABYLON.MeshBuilder.CreatePlane("wall1", {height: 5, width: 40, depth: 0.5}, scene);
            var wall2 = BABYLON.MeshBuilder.CreatePlane("wall2", {height: 5, width: 20, depth: 0.5}, scene);
            var wall3 = BABYLON.MeshBuilder.CreatePlane("wall3", {height: 5, width: 20, depth: 0.5}, scene);
            var wall4 = BABYLON.MeshBuilder.CreatePlane("wall4", {height: 5, width: 40, depth: 0.5}, scene);
            var floor = BABYLON.MeshBuilder.CreatePlane("wall4", {height: 20, width: 40, depth: 0.5}, scene);
            var roof = BABYLON.MeshBuilder.CreatePlane("wall4", {height: 20, width: 40, depth: 0.5}, scene);
            
        
            // Tell the stuff where to go and how to look and collisions and stuff
        
            wall.material = grassMaterial
            wall2.material = blueMat
            wall3.material = redMat
            wall4.material = PMat
            floor.material = YMat
            roof.material = YMat
            wall.position.x  =  10;
            wall.position.y  =  0;
            wall.position.z  =  0;
            wall2.position.x  =  30;
            wall2.position.y  =  0;
            wall2.position.z  =  -10;
            wall2.rotation.y = 1.57079633
            wall3.position.x  =  -10;
            wall3.position.y  =  0;
            wall3.position.z  =  -10;
            wall3.rotation.y = -1.57079633
            wall4.position.x  =  10
            wall4.position.y  =  0;
            wall4.position.z  =  -20;
            wall4.rotation.y = 3.14159265;
            floor.rotation.x = 1.57079633
            floor.position.x = 10
            floor.position.y = -2.5
            floor.position.z = -10
            roof.rotation.x = -1.57079633
            roof.position.x = 10
            roof.position.y = 3
            roof.position.z = -10
            wall.checkCollisions = true;
            wall2.checkCollisions = true;
            wall3.checkCollisions = true;
            wall4.checkCollisions = true;
            floor.checkCollisions = true;
            roof.checkCollisions = true;
        
        
            return scene;
        
        };
