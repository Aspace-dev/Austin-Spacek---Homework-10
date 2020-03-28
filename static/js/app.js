// Defining some variables
const tableData = data
const tbody = d3.select('tbody')
const dateIn = d3.select('#datetime')

// buildTable(tableData) - Building the datatable
function buildTable(data) {
    tbody.html('')  // Clear existing data

    data.forEach(row => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

// defining the handle
const handleClick = () => {
    d3.event.preventDefault()

    const date = d3.select('#datetime').property('value')
    let filteredData = tableData;

    if (date)
        filteredData = filteredData.filter(row => row.datetime === date)
    
    tbody.html('')  // Clear existing data

    data.forEach(row => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

d3.selectAll('#filter-btn').on('click', handleClick)

// Applying the filter
filBtn = d3.select('#filter-btn')
const applFilter = () => {
    d3.event.preventDefault()

    let filterData = tableData
    const dateSearch = d3.select('#datetime').property('value')

    if (dateSearch)
        filterData = filterData.filter(row => 
            row.datetime == dateSearch
            )
    tbody.html('')

    filterData.forEach(row => {
        const currentRow = tbody.append('tr')
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

// Calling the functions
buildTable(tableData)
dateIn.on('change', applFilter)
filBtn.on('click', applFilter)
