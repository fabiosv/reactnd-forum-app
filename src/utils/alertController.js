import Swal from 'sweetalert2'


export const showAlert = (message, sucess=true, redirectHome=false) => {
  Swal.fire({
    type: sucess ? 'success' : 'error',
    text: message,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000
  }).then((r) => {
    if(redirectHome){
      window.location.href="/" //walkaround for react-router-dom
    }
  });
}

export const showConfirmAlert = (message, title="Are you sure?") =>
  Swal.fire({
    title: title,
    text: message,
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: '#3085D6',
    cancelButtonColor: '#D33',
    confirmButtonText: 'Yes, delete it!'
  })