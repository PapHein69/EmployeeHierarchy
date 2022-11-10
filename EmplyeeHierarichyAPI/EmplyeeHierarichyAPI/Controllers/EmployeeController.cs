using EmplyeeHierarichyAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace EmplyeeHierarichyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly DataContext _context;
        public EmployeeController(DataContext context)
        {
            _context = context;
        }
        [HttpGet("all")]
        public async Task<ActionResult<List<Employee>>> GetEmployees()
        {
            
                return Ok(await _context.Employees.ToListAsync());

        }

        [HttpGet("children")]
        public async Task<ActionResult<List<Employee>>> GetChildren(string ManagerNo)
        {

            return Ok(await _context.Employees.Where(x=> x.manager == ManagerNo).ToListAsync());

        }
        [HttpGet("permission")]
        public async Task<ActionResult<List<Employee>>> GetLevel(int level)
        {

            return Ok(await _context.Employees.Where(x => x.permissionRank == level).ToListAsync());

        }



        [HttpPost]
        public async Task<ActionResult<List<Employee>>> CreateEmployee(Employee emp)
        {
            _context.Employees.Add(emp);
            await _context.SaveChangesAsync();
            return Ok(await _context.Employees.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Employee>>> UpdateEmployee(Employee emp)
        {
            var dbEmp = await _context.Employees.FindAsync(emp.id);
            if (dbEmp == null)
                return BadRequest("Employee not found.");

            dbEmp.manager = emp.manager;
            dbEmp.position = emp.position;
            dbEmp.birthDate = emp.birthDate;
            dbEmp.employeeNumber = emp.employeeNumber;
            dbEmp.image = emp.image;
            dbEmp.name = emp.name;
            dbEmp.surname = emp.surname;
            dbEmp.permissionRank = emp.permissionRank;
            dbEmp.salary = emp.salary;
            dbEmp.permissionRank = emp.permissionRank;

            await _context.SaveChangesAsync();
            return Ok(await _context.Employees.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<Employee>>> DeleteEmployee(int id)
        {
            var dbEmpl = await _context.Employees.FindAsync(id);
            if (dbEmpl == null)
                return BadRequest("User not found.");

            _context.Employees.Remove(dbEmpl);
            
            await _context.SaveChangesAsync();
            return Ok(await _context.Employees.ToListAsync());
        }

    }
}