using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using OrariWebApi.Models;

namespace OrariWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProvimeStudentController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ProvimeStudentController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet]
        /* public JsonResult Get(Orari ora)*/
        public JsonResult Get()
        {
            string query = @"
                   select d.Dita,ore.Ora, Dega,Lenda,VitiLenda,VitiStudent,Paraleli,
                    k.Klasa,k2.Klasa from Orari o
                    inner join Ditet d on d.Id=o.Dita
                    inner join Oret ore on ore.Id=o.Ora
                    inner join Klasat k on k.id=o.Klasa1
                    inner join Klasat k2 on k2.Id=o.Klasa2";
           /* where Dega='" + ora.Dega + @"' and VitiStudent='" + ora.VitiStudent + @"' 
                                and Paraleli='" + ora.Paraleli + @"'
                    order by Dita,Ora,VitiLenda,Lenda*/
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("OrariAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [Route("Dega")]
        public JsonResult Dega()
        {
            string query = @"
                    select Dega from Orari group by Dega";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("OrariAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [Route("VitiStudent")]
        public JsonResult VitiStudent()
        {
            string query = @"
                    select VitiStudent from Orari group by VitiStudent";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("OrariAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [Route("Paraleli")]
        public JsonResult Paraleli()
        {
            string query = @"
                    select Paraleli from Orari group by Paraleli";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("OrariAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
    }
}
