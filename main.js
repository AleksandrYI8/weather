import axios from "axios"
let form = document.querySelector("form")
let inu = document.querySelector("form input")
let temp = document.querySelector(".g h2")
let town = document.querySelector("#town")
let img = document.querySelector(".icn img")
let f_like = document.querySelector(".g p")
let timee = document.querySelector("#time")
let dayy   = document.querySelector("#day")
let hum   = document.querySelector(".w_f p")
let win   = document.querySelector(".w_sec p")
let pres   = document.querySelector(".w_th p")
let uv   = document.querySelector(".w_fth p")
let icn_p   = document.querySelector(".icn p")
let one_h_img = document.querySelector("#one_i")
let one_h_g = document.querySelector("#one_g")
let one_h_date = document.querySelector("#one_d")
let two_h_img = document.querySelector("#two_i")
let two_h_g = document.querySelector("#two_g")
let two_h_date = document.querySelector("#two_d")
let three_h_img = document.querySelector("#three_i")
let three_h_g = document.querySelector("#three_g")
let three_h_date = document.querySelector("#three_d")
let four_h_img = document.querySelector("#four_i")
let four_h_g = document.querySelector("#four_g")
let four_h_date = document.querySelector("#four_d")
let five_h_img = document.querySelector("#five_i")
let five_h_g = document.querySelector("#five_g")
let five_h_date = document.querySelector("#five_d")
let time_f = document.querySelector("#time_f")
let graduce_f = document.querySelector("#graduce_f")
let khm_f = document.querySelector("#khm_f")
let time_s = document.querySelector("#time_s")
let graduce_s = document.querySelector("#graduce_s")
let khm_s = document.querySelector("#khm_s")
let time_t = document.querySelector("#time_t")
let graduce_t = document.querySelector("#graduce_t")
let khm_t = document.querySelector("#khm_t")
let time_fth = document.querySelector("#time_fth")
let graduce_fth = document.querySelector("#graduce_fth")
let khm_fth = document.querySelector("#khm_fth")
let time_fiv = document.querySelector("#time_fiv")
let graduce_fiv = document.querySelector("#graduce_fiv")
let khm_fiv = document.querySelector("#khm_fiv")
let img_f = document.querySelector("#img_f")
let img_s = document.querySelector("#img_s")
let img_t = document.querySelector("#img_t")
let img_fth = document.querySelector("#khm_fth")
let img_fiv = document.querySelector("#khm_fiv")







  form.onsubmit = (e) => {
    e.preventDefault();

    let val = inu.value

    axios.get(import.meta.env.VITE_KEY_BASURL + "&q=" + val)
        .then(res => {

           let time = res.data.location.localtime.split(" ", 2)[1]
           let day = res.data.location.localtime.split(" ", 2)[0]

          console.log(res);
            temp.innerHTML = res.data.current.temp_c + "c"
            img.src = res.data.current.condition.icon
            town.innerHTML = res.data.location.country 
            f_like.innerHTML = "Feels like " + res.data.current.feelslike_c
            timee.innerHTML = time
            dayy.innerHTML = day
            hum.innerHTML = res.data.current.humidity
            win.innerHTML = res.data.current.wind_kph + " khm"
            pres.innerHTML = res.data.current.pressure_in + " hpa"
            uv.innerHTML = res.data.current.uv
            icn_p.innerHTML = res.data.current.condition.text
            one_h_img.src = res.data.forecast.forecastday[1].day.condition.icon 
            one_h_g.innerHTML = res.data.forecast.forecastday[1].day.avgtemp_c + "c" 
            one_h_date.innerHTML = res.data.forecast.forecastday[1].date
            two_h_img.src = res.data.forecast.forecastday[2].day.condition.icon 
            two_h_g.innerHTML = res.data.forecast.forecastday[2].day.avgtemp_c + "c" 
            two_h_date.innerHTML = res.data.forecast.forecastday[2].date 
            three_h_img.src = res.data.forecast.forecastday[3].day.condition.icon 
            three_h_g.innerHTML = res.data.forecast.forecastday[3].day.avgtemp_c + "c" 
            three_h_date.innerHTML = res.data.forecast.forecastday[3].date
            four_h_img.src = res.data.forecast.forecastday[4].day.condition.icon 
            four_h_g.innerHTML = res.data.forecast.forecastday[4].day.avgtemp_c + "c" 
            four_h_date.innerHTML = res.data.forecast.forecastday[4].date
            five_h_img.src = res.data.forecast.forecastday[5].day.condition.icon 
            five_h_g.innerHTML = res.data.forecast.forecastday[5].day.avgtemp_c + "c" 
            five_h_date.innerHTML = res.data.forecast.forecastday[5].date

          
        })


  }