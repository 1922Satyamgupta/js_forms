mylistitems=[];
error_msg=[];
function fetchData(){
  let id=document.getElementById("product-id").value;
  let name=document.getElementById("product-Name").value;
  let price=document.getElementById("product-Price").value;
  item={
    "id":id,
    "name":name,
    "price":price
  };
 return item;
}
 function display()
{
  let table = document.getElementById("myTable");
  table.innerHTML="<th>Prodcut id</th> <th>Prodcut Name</th> <th>Prodcut Price </th>";
  mylistitems.forEach(element => {
    table.innerHTML+=`<tr><td>${element.id}</td><td>${element.name}</td><td>${element.price}</td></tr>`;
  });
}
function myFunction(){
  let fetchedData=fetchData();
  console.log(fetchedData);
  mylistitems.push(fetchedData);
  display()
}
