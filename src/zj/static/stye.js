{
  "version": 8,
  "metadata": {
    "zjditu:k": {
      "7Y": "gZ,1r,OP,59,Ba,WG,DG,ZP,xw,0w,ya,mo,90m,zbb,vxB,oog",
      "9m": "zb",
      "Ax": "Rln,rko,jgP,n6X",
      "b9": "b9,7Y,4v,lx,kR,JB,2Z,we,Kx,Nr,G9,MO,3X,Rn,ro,jP,nX,ak,q4,e8,VM,Yj,6Q,XY,QV,A9x,83R,PZ9,bD9,7MY,4Wv,lPx,kKR,JlB,25Z,wDe,Kox,NKr,GJ9,MDO,33X",
      "zb": "Ax,8R",
      "og": "vB,og,P9,Amx",
      "P9": "Bva,WbG,x8w,0gw,yPa,mNo,9km,zRb",
      "8R": "a6k,qB4,e68,V6M,YDj,6wQ,XeY,QyV,g9Z,1Dr,OmP,529,Bva,WbG,ZMP,x8w,0gw,yPa,mNo,9km,zRb,vBB,oDg,8VR,PN9",
      "vB": "ZMP"
    }
  },
  "sprite": "http://47.97.24.100:8899/icons/streets",
  "glyphs": "http://47.97.24.100:8899/fonts/{fontstack}/{range}.pbf",
  "sources": {
    "osm": {
      "type": "vector",
      "tiles": ["http://demo.zjditu.cn/vtiles/tdt_zj/{z}/{x}/{y}.mvt?v={v}"]
    }
  },
  "light": {
    "intensity": 0.2
  },
  "layers": [{
    "id": "zb",
    "type": "background",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "background-color": "rgba(245, 244, 243, 1)"
    }
  }, {
    "id": "vB",
    "type": "fill",
    "source": "osm",
    "source-layer": "og",
    "minzoom": 7,
    "filter": ["all", ["!=", "9m", "9DMbOem"]],
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "rgba(171, 198, 239, 1)",
      "fill-outline-color": "rgba(171, 198, 239, 1)"
    }
  }, {
    "id": "og",
    "type": "fill",
    "source": "osm",
    "source-layer": "og",
    "minzoom": 7,
    "layout": {
      "visibility": "visible"
    },
    "filter": ["all", ["==", "9m", "9DMbOem"]],
    "paint": {
      "fill-color": "rgba(245, 244, 243, 1)"
    }
  }, {
    "id": "Ax",
    "type": "fill",
    "source": "osm",
    "source-layer": "8R",
    "minzoom": 9,
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": {
        "default": "rgba(231, 222, 208, 1)",
        "type": "categorical",
        "property": "9m",
        "stops": [
          ["9lOb05K", "rgba(171, 198, 239, 1)"],
          ["9lOXxJm", "rgba(255, 190, 190, 1)"],
          ["9lObNbX", "rgba(255, 190, 190, 1)"]
        ]
      }
    }
  }, {
    "id": "8R",
    "type": "fill",
    "source": "osm",
    "source-layer": "kR",
    "minzoom": 7,
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "rgba(187, 215, 141, 1)"
    }
  }, {
    "id": "P9",
    "type": "fill",
    "source": "osm",
    "source-layer": "og",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "rgba(245, 245, 245, 1)"
    },
    "maxzoom": 22,
    "minzoom": 7,
    "filter": ["all", ["==", "9m", "9DXPy7G"]]
  }, {
    "id": "b9",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2PnPKR5", "2PnPlGZ"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 2],
          [16, 3],
          [17, 4],
          [18, 5]
        ]
      },
      "line-color": "rgba(255, 255, 255, 1)",
      "line-offset": 0
    }
  }, {
    "id": "7Y",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2PnPKR5", "2PnPlGZ"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 2.6],
          [16, 4],
          [17, 6],
          [18, 7]
        ]
      },
      "line-color": {
        "stops": [
          [15, "rgba(155, 155, 155, 1)"],
          [16, "rgba(132, 123, 93, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "4v",
    "ref": "Nr",
    "paint": {
      "line-width": {
        "stops": [
          [15, 4.6],
          [16, 6],
          [17, 8],
          [18, 9]
        ]
      },
      "line-color": {
        "stops": [
          [15, "rgba(200, 191, 161, 1)"],
          [16, "rgba(180, 170, 123, 1)"],
          [17, "rgba(190, 180, 143, 1)"],
          [18, "rgba(190, 180, 143, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "lx",
    "ref": "G9",
    "paint": {
      "line-width": {
        "stops": [
          [15, 5],
          [17, 9],
          [18, 10]
        ]
      },
      "line-color": {
        "stops": [
          [15, "rgba(220, 211, 181, 1)"],
          [16, "rgba(220, 210, 173, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "kR",
    "ref": "MO",
    "paint": {
      "line-width": 2,
      "line-color": "rgba(203, 192, 162, 1)",
      "line-offset": 0
    }
  }, {
    "id": "JB",
    "ref": "3X",
    "paint": {
      "line-color": {
        "stops": [
          [14, "rgba(125, 89, 203, 1)"],
          [15, "rgba(142, 97, 209, 1)"],
          [16, "rgba(94, 55, 170, 1)"]
        ]
      },
      "line-width": {
        "stops": [
          [13, 3.6],
          [18, 10]
        ]
      }
    }
  }, {
    "id": "2Z",
    "ref": "Rn",
    "minzoom": 10,
    "paint": {
      "line-width": {
        "stops": [
          [9.9, 0],
          [10, 3.4],
          [11, 3.4],
          [12, 4.4],
          [13, 5],
          [18, 11]
        ]
      },
      "line-color": {
        "stops": [
          [11, "rgba(209, 202, 175, 1)"],
          [14, "rgba(209, 202, 175, 1)"],
          [15, "rgba(214, 200, 120, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "we",
    "ref": "ro",
    "minzoom": 10,
    "paint": {
      "line-width": {
        "stops": [
          [12, 4],
          [13, 4.4],
          [14, 5],
          [15, 6],
          [16, 8],
          [17, 10],
          [18, 9]
        ]
      },
      "line-color": {
        "stops": [
          [12, "rgba(220, 219, 205, 1)"],
          [14, "rgba(220, 219, 205, 1)"],
          [15, "rgba(210, 210, 210, 1)"],
          [16, "rgba(132, 123, 93, 1)"],
          [17, "rgba(132, 123, 93, 1)"],
          [18, "rgba(220, 210, 173, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "Kx",
    "ref": "jP",
    "minzoom": 9,
    "paint": {
      "line-width": {
        "stops": [
          [8.9, 0],
          [9, 2.4],
          [10, 2.4],
          [11, 4.6],
          [12, 5.4],
          [13, 7],
          [18, 12]
        ]
      },
      "line-color": {
        "stops": [
          [9, "rgba(255, 244, 175, 1)"],
          [10, "rgba(198, 133, 78, 1)"],
          [11, "rgba(200, 191, 161, 1)"],
          [15, "rgba(214, 185, 90, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "Nr",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2PnPKR5", "2PnPlGZ", "2PnGMVv"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 2.6],
          [16, 4],
          [17, 6],
          [18, 7]
        ]
      },
      "line-color": "rgba(255, 255, 255, 1)",
      "line-offset": 0
    }
  }, {
    "id": "G9",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 12,
    "filter": ["any", ["in", "zb", "2r0WR25", "2r0WgrZ"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [11.9, 0],
          [12, 3],
          [15, 3],
          [17, 7],
          [18, 8]
        ]
      },
      "line-color": "rgba(255, 255, 255, 1)",
      "line-offset": 0
    }
  }, {
    "id": "MO",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 10,
    "filter": ["any", ["in", "zb", "2rv4wjq", "2rvOnaN", "2PR14WM", "wm60xBj", "2r0WR25"]],
    "layout": {
      "line-cap": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [9.9, 0],
          [10, 1.4]
        ]
      },
      "line-color": "rgba(255, 255, 255, 1)",
      "line-offset": 0
    }
  }, {
    "id": "3X",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["all", ["==", "zb", "2r0xo79"]],
    "layout": {
      "visibility": "none",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(186, 146, 241, 1)",
      "line-width": {
        "stops": [
          [13, 2],
          [18, 8]
        ]
      }
    }
  }, {
    "id": "Rn",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2rvDDMq", "2rvDvJN", "2Pnr80j", "2rv8XzN", "2rv8Go9"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [9, 1],
          [10, 1.4],
          [11, 1.4],
          [12, 2.4],
          [13, 3],
          [18, 9]
        ]
      },
      "line-color": {
        "stops": [
          [10, "rgba(255, 244, 175, 1)"],
          [14, "rgba(255, 244, 175, 1)"],
          [15, "rgba(255, 244, 140, 1)"],
          [16, "rgba(254, 240, 145, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "ro",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 10,
    "filter": ["any", ["in", "zb", "2PRoDvq"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [9.9, 0],
          [10, 2],
          [12, 2],
          [13, 2.4],
          [14, 3],
          [15, 4],
          [16, 6],
          [17, 8],
          [18, 7]
        ]
      },
      "line-color": {
        "stops": [
          [12, "rgba(223, 223, 215, 1)"],
          [13, "rgba(255, 255, 255, 1)"],
          [15, "rgba(255, 255, 255, 1)"],
          [16, "rgba(254, 255, 255, 1)"],
          [17, "rgba(254, 255, 255, 1)"],
          [18, "rgba(255, 255, 255, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "jP",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2Pnrkmv", "2rvn4yM"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [8, 1],
          [9, 1.5],
          [10, 2],
          [11, 2.6],
          [12, 3.4],
          [13, 5],
          [18, 10]
        ]
      },
      "line-color": {
        "stops": [
          [9, "rgba(255, 244, 175, 1)"],
          [10, "rgba(255, 244, 175, 1)"],
          [11, "rgba(254, 240, 158, 1)"],
          [15, "rgba(254, 240, 158, 1)"],
          [16, "rgba(254, 235, 130, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "nX",
    "type": "line",
    "source": "osm",
    "source-layer": "b9",
    "minzoom": 10,
    "filter": ["any", ["in", "9m", "wb0bOXl"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-dasharray": [6, 2],
      "line-color": {
        "stops": [
          [10, "rgba(50, 70, 255, 1)"],
          [11, "rgba(50, 70, 255, 1)"],
          [14, "rgba(50, 70, 255, 1)"],
          [15, "rgba(50, 70, 255, 1)"],
          [16, "rgba(50, 70, 255, 1)"]
        ]
      },
      "line-width": {
        "stops": [
          [10, 3],
          [11, 4],
          [12, 4],
          [17, 5],
          [19, 6],
          [20, 6]
        ]
      }
    }
  }, {
    "id": "ak",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 10,
    "filter": ["any", ["in", "zb", "2ro78ml", "wm1Wwa6", "2PnB1lq"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": {
        "stops": [
          [10, "rgba(198, 133, 78, 1)"],
          [11, "rgba(208, 143, 88, 1)"],
          [14, "rgba(208, 143, 88, 1)"],
          [15, "rgba(196, 124, 73, 1)"],
          [16, "rgba(176, 98, 55, 1)"]
        ]
      },
      "line-width": {
        "stops": [
          [10.9, 0],
          [11, 4],
          [12, 6],
          [19, 14]
        ]
      }
    }
  }, {
    "id": "q4",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2ro78ml", "wm1Wwa6", "2PnB1lq"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": {
        "stops": [
          [8, "rgba(255, 215, 140, 1)"],
          [10, "rgba(255, 215, 140, 1)"],
          [11, "rgba(254, 205, 120, 1)"],
          [17, "rgba(254, 205, 120, 1)"],
          [18, "rgba(254, 205, 110, 1)"]
        ]
      },
      "line-width": {
        "stops": [
          [8, 1.2],
          [9, 1.4],
          [10, 2.2],
          [11, 3],
          [19, 12]
        ]
      }
    }
  }, {
    "id": "e8",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2roGK0M"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-dasharray": [6, 3],
      "line-color": {
        "stops": [
          [8, "rgba(255, 215, 140, 1)"],
          [10, "rgba(255, 215, 140, 1)"],
          [11, "rgba(254, 205, 120, 1)"],
          [17, "rgba(254, 205, 120, 1)"],
          [18, "rgba(254, 205, 110, 1)"]
        ]
      },
      "line-width": {
        "stops": [
          [8, 1.2],
          [9, 1.4],
          [10, 2.2],
          [11, 3],
          [19, 12]
        ]
      }
    }
  }, {
    "id": "VM",
    "ref": "Yj",
    "minzoom": 10,
    "paint": {
      "line-color": {
        "stops": [
          [11, "rgba(125, 89, 203, 1)"],
          [14, "rgba(125, 89, 203, 1)"],
          [15, "rgba(142, 97, 209, 1)"],
          [16, "rgba(94, 55, 170, 1)"]
        ]
      },
      "line-width": {
        "stops": [
          [10.9, 0],
          [11, 4.2],
          [12, 7],
          [17, 14],
          [19, 14]
        ]
      }
    }
  }, {
    "id": "Yj",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2rorYgG"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": {
        "stops": [
          [5, "rgba(194, 159, 243, 1)"],
          [10, "rgba(194, 159, 243, 1)"],
          [11, "rgba(186, 146, 241, 1)"]
        ]
      },
      "line-width": {
        "stops": [
          [7, 1.5],
          [8, 1.8],
          [10, 2.7],
          [11, 3],
          [18, 10],
          [19, 12]
        ]
      }
    }
  }, {
    "id": "6Q",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2rorQwl"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-dasharray": [7, 4],
      "line-color": {
        "stops": [
          [5, "rgba(194, 159, 243, 1)"],
          [10, "rgba(194, 159, 243, 1)"],
          [11, "rgba(186, 146, 241, 1)"]
        ]
      },
      "line-width": {
        "stops": [
          [7, 1.5],
          [8, 1.8],
          [10, 2.7],
          [11, 3],
          [18, 10],
          [19, 12]
        ]
      }
    }
  }, {
    "id": "XY",
    "ref": "QV",
    "paint": {
      "line-color": "#AAAAAA",
      "line-width": 2.2
    }
  }, {
    "id": "QV",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 8,
    "filter": ["all", ["in", "9m", "w4XRjwX", "w4X91YR", "w4X9NWl", "w4Xl6nR"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-dasharray": [6, 8],
      "line-color": "#BDC3C7",
      "line-width": 1.6
    }
  }, {
    "id": "gZ",
    "ref": "1r",
    "paint": {
      "line-width": {
        "stops": [
          [15, 4.6],
          [16, 6],
          [17, 8],
          [18, 9]
        ]
      },
      "line-color": {
        "stops": [
          [15, "rgba(200, 191, 161, 1)"],
          [16, "rgba(180, 170, 123, 1)"],
          [17, "rgba(190, 180, 143, 1)"],
          [18, "rgba(190, 180, 143, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "1r",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 13,
    "maxzoom": 24,
    "filter": ["any", ["in", "zb", "2PnPKR5", "2PnPlGZ", "2PnGMVv"]],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 2.6],
          [16, 4],
          [17, 6],
          [18, 7]
        ]
      },
      "line-color": "rgba(255, 255, 255, 1)",
      "line-offset": 0
    }
  }, {
    "id": "OP",
    "ref": "59",
    "minzoom": 13,
    "paint": {
      "line-width": {
        "stops": [
          [15, 2],
          [17, 9],
          [18, 10]
        ]
      },
      "line-color": {
        "stops": [
          [15, "rgba(220, 211, 181, 1)"],
          [16, "rgba(220, 210, 173, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "59",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 13,
    "filter": ["any", ["in", "zb", "2r0WR25", "2r0WgrZ"]],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 3],
          [16, 5],
          [17, 7],
          [18, 8]
        ]
      },
      "line-color": "rgba(255, 255, 255, 1)",
      "line-offset": 0
    }
  }, {
    "id": "Ba",
    "ref": "WG",
    "minzoom": 13,
    "paint": {
      "line-width": 2,
      "line-color": "rgba(203, 192, 162, 1)",
      "line-offset": 0
    }
  }, {
    "id": "WG",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 13,
    "filter": ["any", ["in", "9m", "2rv4wjq", "2rvOnaN", "2PR14WM", "wm60xBj", "2r0WR25"]],
    "layout": {
      "line-cap": "butt"
    },
    "paint": {
      "line-width": 1.4,
      "line-color": "rgba(255, 255, 255, 1)",
      "line-offset": 0
    }
  }, {
    "id": "DG",
    "ref": "ZP",
    "minzoom": 13,
    "paint": {
      "line-width": {
        "stops": [
          [11, 3.4],
          [12, 4.4],
          [13, 5],
          [18, 11]
        ]
      },
      "line-color": {
        "stops": [
          [11, "rgba(209, 202, 175, 1)"],
          [14, "rgba(209, 202, 175, 1)"],
          [15, "rgba(214, 200, 120, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "ZP",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 13,
    "filter": ["any", ["in", "zb", "2rvDDMq", "2rvDvJN", "2Pnr80j", "2rv8XzN", "2rv8Go9"]],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [9, 1],
          [10, 1.4],
          [11, 1.4],
          [12, 2.4],
          [13, 3],
          [18, 9]
        ]
      },
      "line-color": {
        "stops": [
          [10, "rgba(255, 244, 175, 1)"],
          [14, "rgba(255, 244, 175, 1)"],
          [15, "rgba(255, 244, 140, 1)"],
          [16, "rgba(254, 240, 145, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "xw",
    "ref": "0w",
    "minzoom": 13,
    "paint": {
      "line-width": {
        "stops": [
          [12, 4],
          [13, 4.4],
          [14, 5],
          [15, 6],
          [16, 8],
          [17, 10],
          [18, 9]
        ]
      },
      "line-color": {
        "stops": [
          [12, "rgba(220, 219, 205, 1)"],
          [14, "rgba(220, 219, 205, 1)"],
          [15, "rgba(210, 210, 210, 1)"],
          [16, "rgba(132, 123, 93, 1)"],
          [17, "rgba(132, 123, 93, 1)"],
          [18, "rgba(220, 210, 173, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "0w",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 13,
    "filter": ["any", ["in", "zb", "2PRoDvq"]],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [12, 2],
          [13, 2.4],
          [14, 3],
          [15, 4],
          [16, 6],
          [17, 8],
          [18, 7]
        ]
      },
      "line-color": {
        "stops": [
          [12, "rgba(223, 223, 215, 1)"],
          [13, "rgba(255, 255, 255, 1)"],
          [15, "rgba(255, 255, 255, 1)"],
          [16, "rgba(254, 255, 255, 1)"],
          [17, "rgba(254, 255, 255, 1)"],
          [18, "rgba(255, 255, 255, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "ya",
    "ref": "mo",
    "minzoom": 13,
    "paint": {
      "line-width": {
        "stops": [
          [10, 2.4],
          [11, 4.6],
          [12, 5.4],
          [13, 7],
          [18, 12]
        ]
      },
      "line-color": {
        "stops": [
          [9, "rgba(255, 244, 175, 1)"],
          [10, "rgba(198, 133, 78, 1)"],
          [11, "rgba(200, 191, 161, 1)"],
          [15, "rgba(214, 185, 90, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "mo",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 13,
    "filter": ["any", ["in", "zb", "2Pnrkmv", "2rvn4yM"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [8, 1],
          [9, 1.5],
          [10, 2],
          [11, 2.6],
          [12, 3.4],
          [13, 5],
          [18, 10]
        ]
      },
      "line-color": {
        "stops": [
          [10, "rgba(255, 244, 175, 1)"],
          [11, "rgba(254, 240, 158, 1)"],
          [15, "rgba(254, 240, 158, 1)"],
          [16, "rgba(254, 235, 130, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "90m",
    "ref": "zbb",
    "minzoom": 13,
    "paint": {
      "line-color": {
        "stops": [
          [9, "rgba(255, 215, 140, 1)"],
          [10, "rgba(198, 133, 78, 1)"],
          [11, "rgba(208, 143, 88, 1)"],
          [14, "rgba(208, 143, 88, 1)"],
          [15, "rgba(196, 124, 73, 1)"],
          [16, "rgba(176, 98, 55, 1)"]
        ]
      },
      "line-width": {
        "stops": [
          [10.9, 0],
          [11, 4],
          [12, 6],
          [19, 14]
        ]
      }
    }
  }, {
    "id": "zbb",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 13,
    "filter": ["any", ["in", "zb", "2ro78ml", "2roGK0M", "wm1Wwa6", "2PnB1lq"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": {
        "stops": [
          [10, "rgba(255, 215, 140, 1)"],
          [11, "rgba(254, 205, 120, 1)"],
          [17, "rgba(254, 205, 120, 1)"],
          [18, "rgba(254, 205, 110, 1)"]
        ]
      },
      "line-width": {
        "stops": [
          [8, 1.2],
          [9, 1.4],
          [10, 2.2],
          [11, 3],
          [19, 12]
        ]
      }
    }
  }, {
    "id": "vxB",
    "ref": "oog",
    "minzoom": 13,
    "paint": {
      "line-color": {
        "stops": [
          [11, "rgba(125, 89, 203, 1)"],
          [14, "rgba(125, 89, 203, 1)"],
          [15, "rgba(142, 97, 209, 1)"],
          [16, "rgba(94, 55, 170, 1)"]
        ]
      },
      "line-width": {
        "stops": [
          [10.9, 0],
          [11, 4.2],
          [12, 7],
          [17, 14],
          [19, 14]
        ]
      }
    }
  }, {
    "id": "oog",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 13,
    "filter": ["any", ["in", "zb", "2rorYgG", "2rorQwl"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": {
        "stops": [
          [5, "rgba(194, 159, 243, 1)"],
          [10, "rgba(194, 159, 243, 1)"],
          [11, "rgba(186, 146, 241, 1)"],
          [12, "rgba(186, 146, 241, 1)"]
        ]
      },
      "line-width": {
        "stops": [
          [7, 1.5],
          [8, 1.8],
          [10, 2.7],
          [11, 3],
          [18, 10],
          [19, 12]
        ]
      }
    }
  }, {
    "id": "A9x",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 13,
    "filter": ["all", ["in", "vB", "kAwQ4Dy"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(255,0,0,1)",
      "line-width": {
        "stops": [
          [11, 1.4],
          [12, 1.5],
          [13, 2]
        ]
      }
    }
  }, {
    "id": "83R",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 13,
    "filter": ["all", ["in", "vB", "rDyPNjj"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(255,100,0,1)",
      "line-width": {
        "stops": [
          [11, 1.4],
          [12, 1.5],
          [13, 2]
        ]
      }
    }
  }, {
    "id": "PZ9",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 13,
    "filter": ["all", ["in", "vB", "071Q6Wn"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(56,168,0,1)",
      "line-width": {
        "stops": [
          [11, 1.4],
          [12, 1.5],
          [13, 2]
        ]
      }
    }
  }, {
    "id": "bD9",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 13,
    "filter": ["all", ["in", "vB", "kAw8m9j"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(0,112,255,1)",
      "line-width": {
        "stops": [
          [11, 1.4],
          [12, 1.5],
          [13, 2]
        ]
      }
    }
  }, {
    "id": "7MY",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 13,
    "filter": ["all", ["in", "vB", "rDyBgbZ"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(255,0,0,1)",
      "line-width": {
        "stops": [
          [11, 1.4],
          [12, 1.5],
          [13, 2]
        ]
      }
    }
  }, {
    "id": "4Wv",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 17,
    "filter": ["all", ["in", "vB", "JyavkVa"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(255,0,0,1)",
      "line-width": {
        "stops": [
          [17, 14],
          [18, 15],
          [19, 20]
        ]
      }
    }
  }, {
    "id": "lPx",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 17,
    "filter": ["all", ["in", "vB", "jAowOqm"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(255,100,0,1)",
      "line-width": {
        "stops": [
          [17, 14],
          [18, 15],
          [19, 20]
        ]
      }
    }
  }, {
    "id": "kKR",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 17,
    "filter": ["all", ["in", "vB", "y6BXxRz"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(56,168,0,1)",
      "line-width": {
        "stops": [
          [17, 14],
          [18, 15],
          [19, 20]
        ]
      }
    }
  }, {
    "id": "JlB",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 17,
    "filter": ["all", ["in", "vB", "Jya4XAj"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(0,112,255,1)",
      "line-width": {
        "stops": [
          [17, 14],
          [18, 15],
          [19, 20]
        ]
      }
    }
  }, {
    "id": "25Z",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 17,
    "filter": ["all", ["in", "vB", "jAo7yB4"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(255,0,0,1)",
      "line-width": {
        "stops": [
          [17, 14],
          [18, 15],
          [19, 20]
        ]
      }
    }
  }, {
    "id": "wDe",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 17,
    "filter": ["all", ["in", "vB", "2BK3Y95"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(255,0,0,1)",
      "line-width": {
        "stops": [
          [17, 2.8],
          [18, 3],
          [19, 4]
        ]
      }
    }
  }, {
    "id": "Kox",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 17,
    "filter": ["all", ["in", "vB", "nb7vyQD"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(255,100,0,1)",
      "line-width": {
        "stops": [
          [17, 2.8],
          [18, 3],
          [19, 4]
        ]
      }
    }
  }, {
    "id": "NKr",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 17,
    "filter": ["all", ["in", "vB", "mbkzjga"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(56,168,0,1)",
      "line-width": {
        "stops": [
          [17, 2.8],
          [18, 3],
          [19, 4]
        ]
      }
    }
  }, {
    "id": "GJ9",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 17,
    "filter": ["all", ["in", "vB", "2BKnZGj"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(0,112,255,1)",
      "line-width": {
        "stops": [
          [17, 2.8],
          [18, 3],
          [19, 4]
        ]
      }
    }
  }, {
    "id": "MDO",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 17,
    "filter": ["all", ["in", "vB", "nb71ao8"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(255,0,0,1)",
      "line-width": {
        "stops": [
          [17, 2.8],
          [18, 3],
          [19, 4]
        ]
      }
    }
  }, {
    "id": "33X",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 13,
    "filter": ["all", ["in", "vB", "Q0qjaXN", "071xZyD", "b1OPy4W", "GOPbwRz", "kAwV0bv"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-dasharray": [6, 3],
      "line-color": "rgba(130,130,130,1)",
      "line-width": {
        "stops": [
          [11, 1.4],
          [12, 1.5],
          [13, 2]
        ]
      }
    }
  }, {
    "id": "Rln",
    "type": "line",
    "source": "osm",
    "source-layer": "we",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "line-dasharray": [30, 10, 10, 10, 10, 10],
      "line-color": "rgba(60, 60, 60, 1)",
      "line-width": 0.4
    },
    "filter": ["all", ["==", "9m", "wXGy9xX"]],
    "maxzoom": 14,
    "minzoom": 7
  }, {
    "id": "rko",
    "type": "line",
    "source": "osm",
    "source-layer": "we",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "line-dasharray": [30, 10, 10, 10, 10, 10],
      "line-color": "rgba(150,149,149, 1)",
      "line-width": 0.4
    },
    "filter": ["all", ["==", "9m", "wX81kDR"]],
    "maxzoom": 14,
    "minzoom": 7
  }, {
    "id": "jgP",
    "type": "line",
    "source": "osm",
    "source-layer": "we",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "line-dasharray": [30, 10, 10, 10, 10, 10],
      "line-color": "rgba(150,150, 150, 1)",
      "line-width": 0.4
    },
    "filter": ["all", ["==", "9m", "w5lqB2l"]],
    "maxzoom": 14,
    "minzoom": 7
  }, {
    "id": "n6X",
    "type": "line",
    "source": "osm",
    "source-layer": "we",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "line-dasharray": [30, 10, 10, 10, 10, 10],
      "line-color": "rgba(150,150, 150, 1)",
      "line-width": 0.4
    },
    "filter": ["all", ["==", "9m", "w2DloQ6"]],
    "maxzoom": 14,
    "minzoom": 7
  }, {
    "id": "a6k",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "9m", "2rorYgG", "2rorQwl"]],
    "layout": {
      "visibility": "visible",
      "text-field": "{name}",
      "symbol-placement": "line",
      "text-padding": {
        "stops": [
          [10, 1],
          [11, 2]
        ]
      },
      "text-allow-overlap": false,
      "text-ignore-placement": false,
      "text-pitch-alignment": "viewport",
      "text-max-angle": 45,
      "text-keep-upright": true,
      "text-rotation-alignment": "map",
      "symbol-spacing": 500,
      "text-font": ["Microsoft YaHei"],
      "text-size": {
        "stops": [
          [10, 11],
          [11, 13],
          [12, 14]
        ]
      },
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": {
        "stops": [
          [10, "rgba(107, 0, 224, 1)"],
          [11, "rgba(83, 9, 159, 1)"],
          [13, "rgba(83, 9, 159, 1)"],
          [14, "rgba(112, 38, 189, 1)"],
          [16, "rgba(112, 38, 189, 1)"],
          [17, "rgba(87, 30, 145, 1)"]
        ]
      },
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-width": {
        "stops": [
          [10, 2],
          [11, 2],
          [12, 2]
        ]
      }
    }
  }, {
    "id": "qB4",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 11,
    "filter": ["any", ["in", "9m", "2ro78ml", "2roGK0M", "wm1Wwa6", "2PnB1lq"]],
    "layout": {
      "visibility": "visible",
      "symbol-placement": "line",
      "text-field": "{name}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-pitch-alignment": "viewport",
      "symbol-spacing": 500,
      "text-rotation-alignment": "map",
      "text-size": {
        "stops": [
          [13, 13],
          [14, 14]
        ]
      },
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": {
        "stops": [
          [11, "rgba(134, 70, 17, 1)"],
          [13, "rgba(134, 70, 17, 1)"],
          [14, "rgba(104, 54, 13, 1)"],
          [16, "rgba(104, 54, 13, 1)"],
          [17, "rgba(70, 35, 7, 1)"],
          [18, "rgba(70, 35, 7, 1)"]
        ]
      },
      "text-halo-color": {
        "stops": [
          [11, "rgba(255, 231, 159,1)"],
          [13, "rgba(255, 231, 159,1)"],
          [14, "rgba(255, 222, 102,1)"]
        ]
      },
      "text-halo-width": {
        "stops": [
          [10, 1],
          [12, 2]
        ]
      }
    }
  }, {
    "id": "e68",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 14,
    "filter": ["any", ["in", "9m", "2Pnrkmv", "2rvn4yM"]],
    "layout": {
      "visibility": "visible",
      "symbol-placement": "line",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-field": "{name}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": {
        "stops": [
          [12, 11],
          [13, 12]
        ]
      },
      "text-padding": 1,
      "symbol-spacing": 800,
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(104, 54, 13, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-width": {
        "stops": [
          [12, 1],
          [13, 2]
        ]
      }
    }
  }, {
    "id": "V6M",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 14,
    "filter": ["any", ["in", "9m", "2rvDDMq", "2rvDvJN", "2Pnr80j", "2rv8XzN", "2rv8Go9"]],
    "layout": {
      "symbol-placement": "line",
      "text-field": "{name}",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": {
        "stops": [
          [14, 11],
          [15, 12]
        ]
      },
      "symbol-spacing": 800,
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(104, 54, 13, 1)",
      "text-halo-color": {
        "stops": [
          [14, "rgba(255, 255, 255,1)"],
          [15, "rgba(255, 244, 130,1)"]
        ]
      },
      "text-halo-width": {
        "stops": [
          [16, 1],
          [17, 2]
        ]
      }
    }
  }, {
    "id": "YDj",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 10,
    "filter": ["any", ["in", "9m", "2PRoDvq"]],
    "layout": {
      "symbol-placement": "line",
      "text-field": "{name}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-letter-spacing": 1,
      "text-size": 11,
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": {
        "stops": [
          [15, "rgba(104, 54, 13, 1)"],
          [16, "rgba(104, 54, 13, 1)"]
        ]
      },
      "text-halo-color": {
        "stops": [
          [6, "rgba(255, 255, 255, 1)"],
          [10, "rgba(255, 255, 230, 1)"]
        ]
      },
      "text-halo-width": {
        "stops": [
          [16, 1],
          [17, 2]
        ]
      }
    }
  }, {
    "id": "6wQ",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 15,
    "filter": ["any", ["in", "9m", "2PnPKR5", "2PnPlGZ"]],
    "layout": {
      "symbol-placement": "line",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-field": "{name}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": 11,
      "text-letter-spacing": 0,
      "symbol-spacing": 500,
      "text-padding": 0,
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(104, 54, 13, 1)",
      "text-halo-width": 1,
      "text-halo-color": "rgba(255, 255, 255, 1)"
    }
  }, {
    "id": "XeY",
    "type": "symbol",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 13,
    "filter": ["all", ["in", "vB", "kAwQ4Dy", "rDyPNjj", "071Q6Wn", "kAw8m9j", "rDyBgbZ", "Q0qjaXN", "071xZyD", "b1OPy4W", "GOPbwRz", "kAwV0bv"]],
    "layout": {
      "visibility": "visible",
      "symbol-placement": "line",
      "text-rotation-alignment": "map",
      "text-field": "{name}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": 12.5,
      "symbol-spacing": 500,
      "text-pitch-alignment": "viewport",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(80, 80, 80, 1)",
      "text-halo-width": 2,
      "text-halo-color": "rgba(255, 255, 255, 1)"
    }
  }, {
    "id": "QyV",
    "type": "symbol",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 12,
    "filter": ["all", ["in", "9m", "w4XRjwX", "w4X91YR", "w4X9NWl"]],
    "layout": {
      "visibility": "visible",
      "symbol-placement": "line",
      "text-rotation-alignment": "map",
      "text-field": "{name}",
      "symbol-spacing": 500,
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": 11,
      "text-pitch-alignment": "viewport",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(85, 85, 85, 85)",
      "text-halo-width": 2,
      "text-halo-color": "rgba(255, 255, 255, 1)"
    }
  }, {
    "id": "g9Z",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 14,
    "filter": ["all", ["in", "9m", "2ro78ml", "2roGK0M"],
      ["has", "vB"]
    ],
    "layout": {
      "visibility": "visible",
      "symbol-placement": "point",
      "text-field": "{vB}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "text-size": 11,
      "icon-image": "国道",
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 2, 2, 2],
      "icon-rotation-alignment": "viewport",
      "icon-padding": {
        "stops": [
          [7, 20],
          [11, 20],
          [12, 2]
        ]
      }
    },
    "paint": {
      "text-color": "rgba(247, 244, 242, 1)"
    }
  }, {
    "id": "1Dr",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 12,
    "filter": ["all", ["in", "9m", "2rvn4yM"],
      ["has", "vB"]
    ],
    "layout": {
      "visibility": "visible",
      "symbol-placement": "point",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "text-field": "{vB}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": 11,
      "text-padding": 1,
      "icon-image": "省道",
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 2, 2, 2],
      "icon-rotation-alignment": "viewport",
      "icon-padding": {
        "stops": [
          [7, 20],
          [11, 20],
          [12, 60]
        ]
      }
    },
    "paint": {
      "text-color": "rgba(255, 255, 255, 1)",
      "text-halo-color": "rgba(255, 255, 255, 0.8)",
      "text-halo-width": 0.1
    }
  }, {
    "id": "OmP",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "maxzoom": 24,
    "filter": ["all", ["in", "9m", "2rorYgG", "2rorQwl"],
      ["has", "vB"]
    ],
    "layout": {
      "visibility": "visible",
      "text-field": "{vB}",
      "symbol-placement": "point",
      "text-padding": 1,
      "text-allow-overlap": false,
      "text-ignore-placement": false,
      "text-pitch-alignment": "viewport",
      "text-max-angle": 45,
      "text-keep-upright": true,
      "text-rotation-alignment": "viewport",
      "symbol-spacing": 500,
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": 11,
      "icon-image": "高速",
      "icon-rotation-alignment": "viewport",
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 4, 2, 4],
      "icon-padding": {
        "stops": [
          [7, 20],
          [11, 20],
          [12, 2]
        ]
      }
    },
    "paint": {
      "text-color": "rgba(255, 255, 255, 1)",
      "text-halo-color": "rgba(255, 255, 255, 0.8)",
      "text-halo-width": 0.1
    }
  }, {
    "id": "529",
    "type": "symbol",
    "source": "osm",
    "source-layer": "9m",
    "minzoom": 7,
    "filter": ["all", ["==", "9m", "ke9NJ1n"]],
    "layout": {
      "visibility": "visible",
      "text-field": "{name}",
      "symbol-placement": "line",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-justify": "center",
      "text-anchor": "center",
      "text-size": 13,
      "symbol-spacing": {
        "stops": [
          [9, 500],
          [19, 500]
        ]
      },
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(46, 127, 175, 1)",
      "text-halo-width": 2,
      "text-halo-color": "rgba(255, 255, 255, 1)"
    }
  }, {
    "id": "Bva",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Ax",
    "minzoom": 9,
    "filter": ["all", ["!in", "9m", "PO6ZKZR", "PO6ZO1q", "PO6ZgrA", "PZZMoVmR"]],
    "layout": {
      "text-field": "{name}",
      "visibility": "visible",
      "symbol-placement": "point",
      "text-size": 12,
      "text-padding": 4,
      "icon-text-fit": "both",
      "icon-text-fit-padding": [3, 3, 3, 3],
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(115, 115, 22, 1)",
      "text-halo-color": "rgba(255, 255, 255, 0.8)",
      "text-halo-width": 1
    }
  }, {
    "id": "WbG",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Ax",
    "minzoom": 8,
    "filter": ["all", ["==", "9m", "PZZMoVmR"]],
    "layout": {
      "text-field": "{name}",
      "visibility": "visible",
      "symbol-placement": "point",
      "text-size": 12,
      "text-padding": 4,
      "icon-image": "山峰",
      "text-anchor": "left",
      "text-justify": "left",
      "text-offset": [0.6, 0],
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(80, 80, 80, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-width": 1.5
    }
  }, {
    "id": "DoG",
    "source": "osm",
    "source-layer": "8R",
    "type": "fill-extrusion",
    "minzoom": 18,
    "filter": ["all", ["in", "9m", "9yAJRXO", "9yAJRo5", "9yAJXjG", "9yAJgaX", "9yKWM0Q", "9yKyz1X", "9yKyN8l", "9yKyN8l", "9yKnYN8", "9yab8Rm", "9ya4lV7", "9l0zNKl", "9lO8Wn3", "9yKVgGl", "9yAN7Y5"],
      [">", "h", 0]
    ],
    "paint": {
      "fill-extrusion-height": {
        "type": "identity",
        "property": "h"
      },
      "fill-extrusion-opacity": 0.9,
      "fill-extrusion-color": "#f5f2eb"
    }
  }, {
    "id": "ZMP",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Kx",
    "minzoom": 8,
    "filter": ["all", ["!=", "stylename", "地铁口"]],
    "layout": {
      "text-max-width": 8,
      "text-field": "{name}",
      "icon-image": "{stylename}",
      "text-justify": "left",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-size": 12,
      "text-anchor": "left",
      "text-offset": [0.6, 0],
      "visibility": "visible",
      "text-keep-upright": false
    },
    "paint": {
      "text-color": "rgba(115, 81, 57, 1)",
      "text-halo-width": 1,
      "text-halo-color": "rgba(255, 255, 255, 1)"
    }
  }, {
    "id": "x8w",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Ax",
    "minzoom": 8,
    "maxzoom": 22,
    "filter": ["all", ["==", "9m", "PO6ZgrA"],
      ["!=", "icon", "ic_map_streets"]
    ],
    "layout": {
      "text-field": "{name}",
      "visibility": "visible",
      "symbol-placement": "point",
      "text-size": 12,
      "text-padding": 2,
      "text-pitch-alignment": "viewport",
      "icon-image": {
        "stops": [
          [9, "其他兴趣点"],
          [10, "其他兴趣点"]
        ]
      },
      "text-offset": {
        "stops": [
          [9, [0.5, 0]],
          [10, [0.5, 0]]
        ]
      },
      "text-anchor": "left",
      "text-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(65,65, 65, 0.8)",
      "text-halo-width": {
        "stops": [
          [15, 2],
          [15, 2]
        ]
      },
      "text-halo-color": "rgba(255, 255, 255, 1)"
    }
  }, {
    "id": "0gw",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Ax",
    "minzoom": 9,
    "maxzoom": 22,
    "filter": ["all", ["==", "9m", "PO6ZgrA"],
      ["==", "icon", "ic_map_streets"]
    ],
    "layout": {
      "text-field": "{name}",
      "icon-image": {
        "stops": [
          [12, ""],
          [13, "乡级政府"],
          [14, "ic_map_2"]
        ]
      },
      "text-justify": "left",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-size": 12,
      "text-anchor": {
        "stops": [
          [13, "center"],
          [14, "left"]
        ]
      },
      "text-offset": [0.5, 0],
      "visibility": "visible",
      "text-keep-upright": false,
      "icon-padding": 2,
      "icon-offset": [0, 0],
      "icon-text-fit": {
        "stops": [
          [13, "both"],
          [14, "none"]
        ]
      },
      "icon-text-fit-padding": [2, 5, 2, 5]
    },
    "paint": {
      "text-color": {
        "stops": [
          [12, "rgba(255, 255, 255, 1)"],
          [12.9, "rgba(255, 255, 255, 1)"],
          [13, "rgba(255, 255, 255, 1)"],
          [13.9, "rgba(255, 255, 255, 1)"],
          [14, "rgba(255, 255, 255, 1)"]
        ]
      },
      "text-halo-width": {
        "stops": [
          [12, 0.1],
          [13, 0.1],
          [14, 0.1],
          [14, 0.1],
          [14, 0.1],
          [14.1, 0.1]
        ]
      },
      "text-halo-color": "rgba(255, 255, 255, 1)"
    }
  }, {
    "id": "yPa",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Ax",
    "minzoom": 8,
    "maxzoom": 22,
    "filter": ["all", ["in", "9m", "PO6ZO1q"]],
    "layout": {
      "text-field": "{name}",
      "visibility": "visible",
      "symbol-placement": "point",
      "text-size": 12,
      "icon-image": "县级市",
      "icon-text-fit": "both",
      "icon-text-fit-padding": [2, 2, 2, 2],
      "text-justify": "center",
      "text-font": ["黑体"],
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "center",
      "text-keep-upright": false
    },
    "paint": {
      "text-color": {
        "stops": [
          [8, "rgba(255, 255, 255, 1)"],
          [9, "rgba(255, 255, 255, 1)"],
          [10, "rgba(255, 255, 255, 1)"],
          [13.9, "rgba(255, 255, 255, 1)"],
          [14, "rgba(255, 255, 255, 1)"]
        ]
      },
      "text-halo-width": {
        "stops": [
          [9, 0.1],
          [10, 0.1],
          [13, 0.1],
          [14, 0.1]
        ]
      },
      "text-halo-color": "rgba(255, 255, 255, 1)"
    }
  }, {
    "id": "mNo",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Ax",
    "minzoom": 7,
    "maxzoom": 20,
    "filter": ["all", ["in", "9m", "PO6ZKZR"]],
    "layout": {
      "text-field": {
        "stops": [
          [11, "{name}"],
          [14, "{name}人民政府"]
        ]
      },
      "visibility": "visible",
      "symbol-placement": "point",
      "text-size": 16,
      "text-padding": 4,
      "icon-image": {
        "stops": [
          [9, "政府机关"],
          [10, "政府机关"]
        ]
      },
      "text-justify": "left",
      "text-anchor": "left",
      "text-offset": [0.5, 0],
      "text-font": ["Arial Unicode MS Blod", "Open Sans Regular"],
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(65, 65, 65, 1)",
      "text-halo-width": 2,
      "text-halo-color": "rgba(255, 255, 255, 1)"
    }
  }, {
    "id": "9km",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Ax",
    "minzoom": 7,
    "maxzoom": 20,
    "filter": ["all", ["==", "name", "杭州市"]],
    "layout": {
      "text-field": {
        "stops": [
          [11, "{name}"],
          [14, "{name}人民政府"]
        ]
      },
      "visibility": "visible",
      "symbol-placement": "point",
      "text-size": 17,
      "text-padding": 4,
      "icon-image": {
        "stops": [
          [9, "政府机关"],
          [10, "政府机关"]
        ]
      },
      "text-font": ["Arial Unicode MS Blod", "Open Sans Regular"],
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-justify": "left",
      "text-anchor": "left",
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-color": "rgba(65, 65, 65, 1)",
      "text-halo-width": 2,
      "text-halo-color": "rgba(255, 255, 255, 1)"
    }
  }, {
    "id": "zRb",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Ax",
    "minzoom": 11,
    "maxzoom": 22,
    "filter": ["all", ["==", "9m", "PO6Z76O"]],
    "layout": {
      "text-field": {
        "stops": [
          [11, "{name}"],
          [14, "{name}人民政府"]
        ]
      },
      "visibility": "visible",
      "symbol-placement": "point",
      "text-size": 16,
      "text-padding": 4,
      "icon-image": "ic_map_2",
      "icon-text-fit": "none",
      "icon-text-fit-padding": [5, 5, 5, 5],
      "text-justify": "left",
      "text-font": ["Arial Unicode MS Blod", "Open Sans Regular"],
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-color": "rgba(50, 50, 50, 1)",
      "text-halo-width": 2,
      "text-halo-color": "rgba(255, 255, 255, 1)"
    }
  }, {
    "id": "vBB",
    "type": "symbol",
    "source": "osm",
    "source-layer": "zb",
    "maxzoom": 22,
    "minzoom": 7,
    "filter": ["all", ["in", "9m", "Xb0JA7D", "Xb0w60W", "Xb0wxbq", "Xb0wNBO"]],
    "layout": {
      "visibility": "visible",
      "text-field": "{name}",
      "text-size": 14,
      "text-padding": 30,
      "text-rotation-alignment": "viewport",
      "text-pitch-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(14, 122, 173, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-width": 2
    }
  }, {
    "id": "oDg",
    "type": "symbol",
    "source": "osm",
    "source-layer": "zb",
    "maxzoom": 22,
    "minzoom": 10,
    "filter": ["all", ["!in", "9m", "Xb0JA7D", "Xb0w60W", "Xb0wxbq", "Xb0wNBO"]],
    "layout": {
      "symbol-placement": "line",
      "visibility": "visible",
      "text-field": "{name}",
      "text-size": 12,
      "text-padding": 20,
      "text-rotation-alignment": "viewport",
      "text-pitch-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(64, 160, 216, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-width": 2
    }
  }, {
    "id": "Amx",
    "type": "symbol",
    "source": "osm",
    "source-layer": "og",
    "minzoom": 7,
    "maxzoom": 17,
    "filter": ["all", ["in", "9m", "9DMbOem", "9DXPy7G"]],
    "layout": {
      "visibility": "visible",
      "text-field": "{name}",
      "text-size": 12,
      "text-padding": 20,
      "text-rotation-alignment": "viewport",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "symbol-spacing": 800
    },
    "paint": {
      "text-color": "rgba(50, 50, 50, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-width": 2
    }
  }, {
    "id": "8VR",
    "type": "symbol",
    "source": "osm",
    "source-layer": "b9",
    "minzoom": 12,
    "filter": ["any", ["in", "9m", "24Z2x3v", "KbBOe0Y", "24b9DqZ", "24b9v7r"]],
    "layout": {
      "visibility": "visible",
      "symbol-placement": "line",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-field": "{name}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": {
        "stops": [
          [12, 11],
          [13, 12]
        ]
      },
      "text-padding": 1,
      "symbol-spacing": 500,
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(104, 54, 13, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-width": {
        "stops": [
          [12, 1],
          [13, 2]
        ]
      }
    }
  }, {
    "id": "PN9",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Kx",
    "minzoom": 17,
    "filter": ["all", ["in", "stylename", "地铁口"]],
    "layout": {
      "text-field": "{name}",
      "icon-image": "{stylename}",
      "icon-text-fit": "both",
      "icon-text-fit-padding": [4, 4, 4, 4],
      "text-justify": "center",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-size": 10,
      "text-anchor": "center",
      "text-offset": [0.3, 0],
      "text-keep-upright": false
    },
    "paint": {
      "text-color": "rgba(254, 254, 254, 1)"
    }
  }],
  "id": "x04sv9tch"
}