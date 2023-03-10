export function searchCustomers() {
    if(!localStorage['customers']) {
        localStorage['customers'] = '[]';
    }
    let customers = localStorage['customers'];
    customers = JSON.parse(customers)
    return customers;
}

export function searchCustomerById(id:string) {
    let customers = searchCustomers();
    return customers.find((customer:any) => customer.id == id)
}

export function removeCustomer(id:string) {
    let customers = searchCustomers();
    let index = customers.findIndex((customer:any) => customer.id == id);
    customers.splice(index, 1)
    localStorage['customers'] = JSON.stringify(customers)
}

export function saveCustomer(customer:any) {
    let customers = searchCustomers();
    customers.push(customer)
    localStorage['customers'] = JSON.stringify(customers)
}
