package trabalho.programacao.web.servlet;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import trabalho.programacao.web.model.Usuario;

/**
 * Servlet implementation class UsuarioServlet.
 */
@WebServlet("/usuarioServlet")
public class UsuarioServlet extends HttpServlet {

	private static final long serialVersionUID = -3162419944663739724L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		List<Usuario> usuarios = new ArrayList<Usuario>();
		usuarios.add(new Usuario("Yure", "yure@gmail.com"));
		usuarios.add(new Usuario("Kesley", "kesley@gmail.com"));

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<head>");
		out.println("<title>Usuarios</title>");
		out.println("</head>");
		out.println("<body>");
		out.println("<ul>");
		
		for (Usuario usuario : usuarios) {
			out.println("<li>");
			out.println("<a href=\"mailto:" + usuario.getEmail() + "\">");
			out.println(usuario.getNome());
			out.println("</a>");
			out.println("</li>");
		}
		out.println("</ul>");
		out.println("<hr/><a href=\"/usuarios/\">Voltar</a>");
		out.println("</body>");
		out.println("</html>");
		out.close();
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String nome = request.getParameter("nome");
		Boolean usuarioEncontrado = false;
		
		List<Usuario> usuarios = new ArrayList<Usuario>();
		usuarios.add(new Usuario("Yure", "fabio@gmail.com"));
		usuarios.add(new Usuario("Kesley", "maria@gmail.com"));
	
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<head>");
		out.println("<title>Autenticando usuário</title>");
		out.println("</head>");
		out.println("<body>");
		out.println("<ul>");
		
		for (Usuario usuario : usuarios) {
			
			if( usuario.getNome().equals(nome) ) {
				out.println("Usuário autenticado com sucesso");
				out.println("<li>");
				out.println("<a href=\"mailto:" + usuario.getEmail() + "\">");
				out.println(usuario.getNome());
				out.println("</a>");
				out.println("</li>");
				
				usuarioEncontrado = true;
				
			}
			
		}
		
		if( ! usuarioEncontrado ) {
			
			out.println("Usuário não autenticado!");
			
		}
		
		out.println("</ul>");
		out.println("<hr/><a href=\"/usuarios/\">Voltar</a>");
		out.println("</body>");
		out.println("</html>");
		out.close();
	
	}

}