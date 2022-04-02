const popTemplate = function(employee) {
    const icon = function() { 
        if (employee.role === 'Manager') {
            return `<i class="bi bi-cup-fill"></i>`;
        } else if (employee.role === 'Engineer') {
            return `<i class="bi bi-eyeglasses"></i>`;
        } else if (employee.role === 'Intern') {
            return `<i class="bi bi-person-circle"></i>`;
        } else {
            return ``;
        }
    }

    return `
    <article class="col-3">
    <div class="card-deck">
        <div class="card shadow p-3 mb-5">
          <div class="card-header">
          <h4>${employee.name}</h4>
          <h5>
          ${icon()}
          ${employee.role}
          </h5>
          </div>
          <div class="card-body">
            <p class="card-text">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">${employee.label} ${employee.info}</li>
                </ul>
            </p>
          </div>
        </div>
    </div>
</article>      
`}

const populate = function(employee) {
   return employee.map(popTemplate);
}

module.exports = (employee) => { 
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../src/style.css">
</head>
<body>
    <header class="text-center bg-danger align-middle">
    <h1 class="align-middle">My Team</h1>
    </header>
    <section class="row justify-content-center">
        ${populate(employee)}                                            
    </section>
</body>
</html>
`}

// <!-- ${pageData.create} -->