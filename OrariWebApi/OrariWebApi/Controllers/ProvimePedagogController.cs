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
    public class ProvimePedagogController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        public ProvimePedagogController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet]
        public JsonResult Get(Orari ora)
        {
            string query = @"
                    select d.Dita,ore.Ora,Dega,Lenda,VitiLenda,VitiStudent,Paraleli,
                        k.Klasa,k2.Klasa from Orari o
                        inner join dbo.Ditet d on d.Id=o.Dita
                        inner join dbo.Oret ore on ore.Id=o.Ora
                        inner join dbo.Klasat k on k.Id=o.Klasa1
                        inner join dbo.Klasat k2 on k2.Id=o.Klasa2
                        where Emer='" + ora.Emer + @"' and Mbiemer='" + ora.Mbiemer + @"'
                        order by Dita,Ora,Lenda,Dega,VitiLenda,VitiStudent,Paraleli";
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

        [Route("GetOnlyPetagog")]
        public JsonResult GetOnlyPetagog()
        {
            string query = @"
                    select Emer, Mbiemer from Orari group by Emer,Mbiemer";
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
