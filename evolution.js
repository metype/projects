var canvas = document.getElementById('canvas');

        var engine = new BABYLON.Engine(canvas, true);

        var createScene = function(){
            var scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color3.White();
            var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0,
            0,-10), scene);
            camera.setTarget(BABYLON.Vector3.Zero());
            camera.attachControl(canvas,true);
            camera.keysUp.push(87);    //W
            camera.keysDown.push(83)   //D
            camera.keysLeft.push(65);  //A
            camera.keysRight.push(68); //S


            var box = BABYLON.Mesh.CreateBox("Box",4.0,scene);
            return scene;
        }

        var scene = createScene();
        engine.runRenderLoop(function(){
            scene.render();
        });
