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
    public class UpdateDisponibelController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public UpdateDisponibelController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpPut]
        public JsonResult Put(Disponibel dis)
        {
            string query = @"
                   update Disponibel set
                    OraId = '" + dis.OraId + @"',
                    KlasaId = '" + dis.KlasaId + @"',
                    Perdorur = '" + dis.Perdorur + @"'
                    where DitaId = " + dis.DitaId + @"";
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
            return new JsonResult("Disponibel u Updatua me Sukses");
        }

        [Route("DitaId")]
        public JsonResult DidaId()
        {
            string query = @"
                    select DitaId from Disponibel";
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

        [Route("OraId")]
        public JsonResult OraId()
        {
            string query = @"
                    select OraId from Disponibel";
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
