import React, { useEffect } from "react"
import mapboxgl from "mapbox-gl"
import { GlobalStyle } from "../styles/globals"

function Mapps() {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYW51dXJhZzA4IiwiYSI6ImNsZmdxZnBheDFjZ3A0MnRhd2MzeWRhaDUifQ.wzRDnqnTt19hL2TuWKiusw"

    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    })

    
    function successLocation(position) {
      setupMap([position.coords.longitude, position.coords.latitude])
    }

    function errorLocation() {
      setupMap([-2.24, 53.48])
    }

    function setupMap(center) {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 15,
      })

      const nav = new mapboxgl.NavigationControl()
      map.addControl(nav)

      var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      })

      map.addControl(directions, "top-left")

      // Add the control to the map.
      map.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        })
      )
    }
  }, []) 

  return (
    <div>
        <GlobalStyle/>
      <div id="map" style={{ width: "100%", height: "1000px" }} />
      <div></div>
    </div>
  )
}

export default Mapps
