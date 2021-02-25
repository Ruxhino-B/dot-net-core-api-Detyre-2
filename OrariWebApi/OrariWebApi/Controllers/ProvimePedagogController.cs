using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using OrariWebApi.Models;
using System.Data;
using System.Data.SqlClient;

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
        public JsonResult Get()
        {
            string query = @"
                    select Emer+' '+Mbiemer as Emer_Mbiemer, d.Dita,ore.Ora,Dega,Lenda,VitiLenda,VitiStudent,Paraleli,
                        k.Klasa,k2.Klasa from Orari o
                        inner join dbo.Ditet d on d.Id=o.Dita
                        inner join dbo.Oret ore on ore.Id=o.Ora
                        inner join dbo.Klasat k on k.Id=o.Klasa1
                        inner join dbo.Klasat k2 on k2.Id=o.Klasa2
                        
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
                    select Emer+' '+Mbiemer as Emer_Mbiemer from Orari group by Emer,Mbiemer";
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
