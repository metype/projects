        var createScene = function(){
            var scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color3.White();

            var box = BABYLON.Mesh.CreateBox("Box",4.0,scene);
            var camera = new BABYLON.ArcRotateCamera("arcCam",
                    BABYLON.Tools.ToRadians(45),
                    BABYLON.Tools.ToRadians(45),
                    10.0,box.position,scene);
            camera.attachControl(canvas,true);

            return scene;
        }
