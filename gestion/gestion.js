// Obtenemos los elementos del DOM
const employeeForm = document.getElementById('employeeForm');
const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

// Manejamos el evento de enviar el formulario
employeeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtenemos los valores de los campos de entrada
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const department = document.getElementById('department').value;
    
    // Agregamos un nuevo empleado a la tabla
    const newRow = employeeTable.insertRow();
    const cellName = newRow.insertCell(0);
    const cellPosition = newRow.insertCell(1);
    const cellDepartment = newRow.insertCell(2);
    const cellActions = newRow.insertCell(3);
    
    cellName.textContent = name;
    cellPosition.textContent = position;
    cellDepartment.textContent = department;
    
    // Botón de eliminación
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        // Eliminamos la fila cuando se hace clic en el botón
        employeeTable.deleteRow(newRow.rowIndex - 1);
    });
    
    cellActions.appendChild(deleteBtn);
    
    // Limpiamos los campos de entrada
    employeeForm.reset();
});

                