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
    public class ImportLendetController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ImportLendetController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select * from ImportLendet";
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
        [HttpPost]
        public JsonResult Post(ImportLendet il)
        {
            string query = @"
                    insert into ImportLendet (Emer,Mbiemer,Lenda,Dega,VitiLenda,VitiStudent,
Paraleli,NrStudent,Kapur,Paradiplomim) values 
('" + il.Emer + @"','" + il.Mbiemer + @"','" + il.Lenda + @"','" + il.Dega + @"',
'" + il.VitiLenda + @"','" + il.VitiStudent + @"','" + il.Paraleli + @"','" + il.NrStudent + @"',
'" + il.Kapur + @"','" + il.Paradiplomim + @"')";
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

        [Route("getElShtoOrari")]
        public JsonResult getElShtoOrari()
        {
            string query = @"
                    select DitaId,d.Dita, OraId, ore.Ora, KlasaId, k.Klasa, Perdorur from Disponibel dis
                        inner join Ditet d on dis.DitaId=d.Id
                        inner JOIN Oret ore on dis.OraId = ore.Id
                        inner Join Klasat k on dis.KlasaId=k.Id
                        where dis.Perdorur=0";
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
