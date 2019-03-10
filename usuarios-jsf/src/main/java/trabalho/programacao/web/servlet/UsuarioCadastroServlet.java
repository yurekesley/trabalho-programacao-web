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

@WebServlet("/usuarioCadastroServlet")
public class UsuarioCadastroServlet extends HttpServlet {

	private static final long serialVersionUID = 5744210877035953851L;

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String nome = request.getParameter("nome");
		String email = request.getParameter("email");
		
		Boolean usuarioEncontrado = false;
		
		List<Usuario> usuarios = new ArrayList<Usuario>();
		usuarios.add(new Usuario("Fabio", "fabio@gmail.com"));
		usuarios.add(new Usuario("Maria", "maria@gmail.com"));
		usuarios.add(new Usuario("Jose", "jose@gmail.com"));
		usuarios.add(new Usuario("Pedro", "pedro@gmail.com"));
		usuarios.add(new Usuario("Ana", "ana@gmail.com"));
	
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<head>");
		out.println("<title>Cadastrando usuário</title>");
		out.println("</head>");
		out.println("<body>");
		out.println("<ul>");
		
		for (Usuario usuario : usuarios) {
			
			out.println("<li>");
			out.println("<a href=\"mailto:" + usuario.getEmail() + "\">");
			out.println(usuario.getNome());
			out.println("</a>");
			out.println("</li>");
				
			if( usuario.getNome().equals(nome) ) {
				usuarioEncontrado = true;
			}
			
		}
		
		if( ! usuarioEncontrado ) {
			
			usuarios.add(new Usuario(nome, email));
			
			out.println("<li>");
			out.println("<a href=\"mailto:" + email + "\">");
			out.println(nome);
			out.println("</a>");
			out.println("</li>");
			
			out.println("</br>Usuário já existente");
			
		} else {
			
			out.println("</br>Usuário cadastrado com sucesso");
		}
		
		out.println("</ul>");
		out.println("<hr/><a href=\"/usuarios/\">Voltar</a>");
		out.println("</body>");
		out.println("</html>");
		out.close();
	
	}

}