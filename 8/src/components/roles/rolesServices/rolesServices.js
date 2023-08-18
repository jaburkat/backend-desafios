/* ************************************************************************** */
/* /src/components/roles/rolesServices/rolesServices.js - servicio de roles. */
/* ************************************************************************** */

/* Definir la clase RolesServices */
class RolesServices {
  /* Test de middleware ath Admin */
  getAdmin = async (req, res) => {
    try {
      return res.status(200).json({ success: true, message: 'Si estas viendo esto es porque eres Admin registrado' });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'Error en getAdmin',
        message: 'Se produjo un error al procesar la solicitud.',
      });
    }
  };
  /* Test de middleware ath User */
  getUser = async (req, res) => {
    try {
      return res.status(200).json({ success: true, message: 'Si estás viendo esto es porque eres un User registrado.' });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'Error en getUser',
        message: 'Se produjo un error al procesar la solicitud.',
      });
    }
  };
}

/* Exportar una instancia de la clase 'RolesServices' */
module.exports = new RolesServices();
