function AddToDoItem1(){
    let todoName = 'Go to college';
    let todoDate = '06/05/2025';
    return <>
      <div class="row">
            <div class="col-6">
              <p>{todoName}</p>
            </div>
            <div class="col-4">
              {todoDate}
            </div>
            <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </div>
    </>
}
export default AddToDoItem1;