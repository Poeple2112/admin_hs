const t_body = document.querySelector(".t_body")
const url_us = "https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/tuanthanh/users"



async function handleGetAPIUser(url) {
    try {
        const data = await fetch(url)
        const res = await data.json()
        for(i=0;i<res.length;i++){
            t_body.innerHTML += `                <tr>
                    <td>${res[i].address}</td>
                    <td>${res[i].fullname}</td>
                    <td>${res[i].username}</td>
                    <td></td>
                    <td></td>
                </tr>`
            
        }

        console.log(res)
    } catch (error) {
        console.error(error)
    } finally {
        console.log("Đã hoàn thành")
    }
}


handleGetAPIUser(url_us)