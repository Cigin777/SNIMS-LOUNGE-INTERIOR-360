var APP_DATA = {
  "scenes": [
    {
      "id": "0-lounge-entry",
      "name": "LOUNGE ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.004647219626122023,
          "pitch": 0.07692627337788416,
          "rotation": 0,
          "target": "1-cabin-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cabin-room",
      "name": "CABIN ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6609123821629233,
          "pitch": 0.15301589072953092,
          "rotation": 0,
          "target": "0-lounge-entry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3017592244319687,
          "pitch": 0.17219634641431547,
          "title": "EXIT DOOR",
          "text": "TO WAITING AREA"
        }
      ]
    }
  ],
  "name": "SNIMS LOUNGE INTERIOR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
