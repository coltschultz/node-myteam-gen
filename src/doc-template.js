const popEngineer = function(employee) {
    return `
    <article class="col-3">
    <div class="card-deck">
        <div class="card">
          <div class="card-header">
          <h4>${employee}</h4>
          <h5>
          <!-- Icon Goes Here -->
          Manager
          </h5>
          </div>
          <div class="card-body">
            <p class="card-text">
                <ul class="list-group">
                    <li class="list-group-item">ID: 1</li>
                    <li class="list-group-item">Email: <a href="mailto:email">jared@whatever.com</a></li>
                    <li class="list-group-item">Office Number: 1</li>
                </ul>
            </p>
          </div>
        </div>
    </div>
</article>      
`}

module.exports = (employee) => { return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>

    </header>
    <section class="row">
        ${employee.name}                                            
    </section>
</body>
</html>
`}

// <!-- ${pageData.create} -->