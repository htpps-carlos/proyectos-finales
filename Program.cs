using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace GestionReciclaje
{

    public class Material
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Tipo { get; set; }
    }

   
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Material> Materiales { get; set; }
    }

   
    public class MaterialService
    {
        private readonly ApplicationDbContext _context;

        public MaterialService(ApplicationDbContext context)
        {
            _context = context;
        }

        public void AddMaterial(string nombre, string tipo)
        {
            var material = new Material { Nombre = nombre, Tipo = tipo };
            _context.Materiales.Add(material);
            _context.SaveChanges();
        }

        public void ListMaterials()
        {
            var materiales = _context.Materiales.ToList();
            foreach (var material in materiales)
            {
                Console.WriteLine($"ID: {material.Id}, Nombre: {material.Nombre}, Tipo: {material.Tipo}");
            }
        }

        public void DeleteMaterial(int id)
        {
            var material = _context.Materiales.Find(id);
            if (material != null)
            {
                _context.Materiales.Remove(material);
                _context.SaveChanges();
            }
            else
            {
                Console.WriteLine("Material no encontrado.");
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
            optionsBuilder.UseSqlite("Data Source=reciclaje.db");

            using (var context = new ApplicationDbContext(optionsBuilder.Options))
            {
                context.Database.EnsureCreated();

                var service = new MaterialService(context);

                while (true)
                {
                    Console.WriteLine("1. Agregar  Material");
                    Console.WriteLine("2. Listar Materiales");
                    Console.WriteLine("3. Eliminar Material");
                    Console.WriteLine("4. Salir");
                    Console.Write("Selecciona una opción: ");
                    var opcion = Console.ReadLine();

                    switch (opcion)
                    {
                        case "1":
                            Console.Write("Nombre del material: ");
                            var nombre = Console.ReadLine();
                            Console.Write("Tipo del material: ");
                            var tipo = Console.ReadLine();
                            service.AddMaterial(nombre, tipo);
                            break;

                        case "2":
                            service.ListMaterials();
                            break;

                        case "3":
                            Console.Write("ID del material a eliminar: ");
                            if (int.TryParse(Console.ReadLine(), out int id))
                            {
                                service.DeleteMaterial(id);
                            }
                            else
                            {
                                Console.WriteLine("ID inválido.");
                            }
                            break;

                        case "4":
                            return;

                        default:
                            Console.WriteLine("Opción no válida.");
                            break;
                    }
                }
            }
        }
    }
}
