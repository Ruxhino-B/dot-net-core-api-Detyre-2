using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrariWebApi.Models
{
    public class ImportLendet
    {
        public string Emer { get; set; }
        public string Mbiemer { get; set; }
        public string Lenda { get; set; }
        public string Dega { get; set; }
        public int VitiLenda { get; set; }
        public int VitiStudent { get; set; }
        public string Paraleli { get; set; }
        public int NrStudent { get; set; }
        public int Kapur { get; set; }
        public int Paradiplomim { get; set; }
    }
}
