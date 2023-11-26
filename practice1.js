const user_click = document.querySelector("#user_click");

const done_task = 0
user_click.addEventListener("click", click_function);

function click_function() {
    const user_input = document.getElementById("user_output").value;

    const data = {
        user: user_input
    };

    axios.post("https://crudcrud.com/api/cf7b4479e9e645468c29f1f70d929728/todo", data)
    .then(response => {
        console.log(response.data);

        const cre_work = document.createElement("p");
        const cre_done = document.createElement("button");

        cre_done.textContent = "DONE";
        cre_work.textContent = response.data.user;

        document.querySelector(".box").appendChild(cre_work);
        cre_work.appendChild(cre_done);
        cre_work.appendChild(cre_rem);

        cre_done.onclick = () => {
            const itemId = response.data._id; 
            axios.delete(`https://crudcrud.com/api/cf7b4479e9e645468c29f1f70d929728/todo/${itemId}`)
            .then(() => {
                done_task ++ ;
                cre_done.parentElement.remove();
            })
            .catch(error => {
                console.error("Error deleting item:", error);
                
            });
        };

    
        localStorage.setItem("user_work", JSON.stringify(response.data));
    })
    .catch(error => {
        console.error("Error posting data:", error);

    });
}


document.addEventListener("DOMContentLoaded" , get_the_all_data) ; 

function get_the_all_data(){

    let data = 0 ; 
    axios.get("https://crudcrud.com/api/cf7b4479e9e645468c29f1f70d929728/todo")
    .then((res) =>{

        const show = res.data ; 

        for(let i = 0 ; i < show.length ; i ++){

            data ++ ;
            const user_ele = document.createElement("P"); 
            user_ele.textContent = show[i].user ; 
            const cre_done = document.createElement("button");
            cre_done.textContent = "DONE";
            if (user_ele === ""){
                continue
            }
            else{
                user_ele.appendChild(cre_done)
                axios.delete()
            }
            

            cre_done.onclick = ()=>{

                const itemId = response.data._id; 
                axios.delete(`https://crudcrud.com/api/cf7b4479e9e645468c29f1f70d929728/todo/${itemId}`)
                done_task ++ ;
                cre_done.parentElement.remove()
            }
        }
    })
    .catch((error)=>{
        console.log(error);
    })

    document.getElementById("remaing-work").textContent = data ;
    document.getElementById("res").textContent = done_task ;
}
