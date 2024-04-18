import { ConvertDate } from "./ConvertDate"

export const settingChartData = (setChartData ,prices) => {
     setChartData({
                        labels: prices.map((price) => ConvertDate(price[0]) ),
                        datasets: [{
                            data: prices.map((price) => price[1]),
                            fill: false,
                            borderColor: "#3a80e9",
                            backgroundColor: "rgb(58,128,233,0.1)",
                            pointRadius : 2,
                            borderWidth: 2,
                            tension: 0.25,
                            fill: true,
                        },
                    ],
                    })
}