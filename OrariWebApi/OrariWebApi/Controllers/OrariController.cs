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
    public class OrariController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public OrariController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet]
        /*public JsonResult Get(Orari ora)*/
        public JsonResult Get()
        {
            string query = @"
                    select ore.Ora, o.Dita, Klasa1, Klasa2, Dega,Lenda,VitiLenda,o.VitiStudent,
                    o.Paraleli,LOWER(Emer)+'.'+LOWER(Mbiemer)+'@fshn.edu.al' as Petagog, NrStudent
                      from Orari o
                      inner join Oret ore on o.Ora=ore.Id
                      inner join Ditet d on o.Dita=d.Id";
            //where o.Klasa1 = '" + ora.Klasa1 + @"'
            //   and o.Dita = '" + ora.Dita + @"'
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("OrariAppCon");
            SqlDataReader myReader;
            using(SqlConnection myCon=new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query,myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Orari ora)
        {
            string query = @"
                    insert into Orari (Emer,Mbiemer,Lenda,Dega,VitiLenda,VitiStudent,Paraleli,
                                            NrStudent,Dita,Ora,Klasa1,Klasa2,paradiplomim) 
values
('"+ora.Emer+@"','"+ora.Mbiemer+@"','"+ora.Lenda+@"','"+ ora.Dega+@"',
'"+ora.VitiLenda+@"','"+ora.VitiStudent+@"','"+ora.Paraleli+@"','"+ora.NrStudent+@"',
'"+ora.Dita+@"','"+ora.Ora+@"','"+ora.Klasa1+@"','"+ora.Klasa2+@"','"+ora.paradiplomim+@"')";
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
            return new JsonResult("Shtuar me Sukses");
        }

        [Route("GetOnlyKlasa")]
        public JsonResult GetOnlyKlasa()
        {
            string query = @"
                    select id, KlasaNew from Klasat group by id,KlasaNew";
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

        [Route("GetOnlyDita")]
        public JsonResult GetOnlyDita()
        {
            string query = @"
                    select id,Dita from Ditet group by id,Dita;";
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
                    select Dega from ImportLendet group by Dega";
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
