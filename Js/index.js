

  async function getCases() {
    const result = await fetch("https://my-json-server.typicode.com/matincodes/json-server/allCases")
    const data = await result.json();
    const request = data.cases;
    const total = document.querySelectorAll("h3");
    const assets = Array.from(total);
   assets.forEach((cur, index) => {
       index === 0 ? cur.textContent = request.total_request : cur;
       index === 1 ? cur.textContent = request.request_in_progress : cur;
       index === 2 ? cur.textContent = request.lawyer_available : cur;
       index === 3 ? cur.textContent = request.request_per_lawyer : cur;
       index === 4 ? cur.textContent = request.new_cases: cur;
    });

    const active = data.active_cases
    const newCases = data.new_cases
    const closed = data.closed_cases
    const type = document.querySelector('.month__selection')

    


const options = {
  chart: {
    width: "100%",
    height: 550,
    type: 'line'
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
    title: {
      text: 'Case Chart',
      align: 'left',
      margin: 15,
      offsetY: 25,
      offsetX: 20,
      style: {
        fontSize:  '30px',
        fontWeight:  'bold',
        fontFamily:  undefined,
        color:  '#4f281f'
      },
    },
  series: [{
    name: 'Active Cases',
    data: active.this_month
  },
 {
  name: 'New Cases',
  data: newCases.this_month
 },
 {
  name: 'Closed Cases',
  data: closed.this_month
 }
],
  xaxis: {
    categories: data.days
  },

    markers: {
      size: 6,
      colors: ["#FFA44E"],
      strokeColors: "#000",
      strokeWidth: 1,
      hover: {
        size: 9,
      }
    },
    grid: {
      show: true,
      padding: {
        bottom: 0
      },  
      xaxis: {
        lines: {
         show: true,
      }
    },
    yaxis: {
      lines: {
        show: true,
      }
    },
    },
  
  legend: {
      position: 'top',
      itemMargin: {
        horizontal: 10,
        vertical: 10
    },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 550,
            width: "100%",
          type: 'line'
        },
        legend: {
          position: "bottom"
        }
      }
      }
    ]
}

const chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render()
      

      type.addEventListener("change", (event)=>{
        if (event.target.value === 'one') {
            chart.updateSeries([{
              data: active.this_month
            }, {
               data: newCases.this_month
            }, {
               data: closed.this_month
            }])
          console.log(event.target.value)
      }else if(event.target.value === 'two'){
        chart.updateSeries([{
          data: active.last_month
        }, {
           data: newCases.last_month
        }, {
           data: closed.last_month
        }])
      } else if(event.target.value === 'three'){
        chart.updateSeries([{
          data: active.two_month
        }, {
           data: newCases.two_month
        }, {
           data: closed.two_month
        }])

      } else if(event.target.value === 'four'){
        chart.updateSeries([{
          data: active.three_month
        }, {
           data: newCases.three_month
        }, {
           data: closed.three_month
        }])

      } else if(event.target.value === 'five'){
        chart.updateSeries([{
          data: active.four_month
        }, {
           data: newCases.four_month
        }, {
           data: closed.four_month
        }])

      } else if(event.target.value === 'six'){
        chart.updateSeries([{
          data: active.five_month
        }, {
           data: newCases.five_month
        }, {
           data: closed.five_month
        }])
      }

        
    })


}

getCases()

const bar = document.querySelector(".nav__link");
const body = document.querySelector("body");

 bar.addEventListener("click", () => {
    body.classList.toggle("sidebar-expand")
 });
    
 
