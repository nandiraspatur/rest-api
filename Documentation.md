### My App NandiraSPatur

Demo App with basic REST API.

#### REST API

List of basic routes:

<table>
	<tr>
    	<td><b>Route</b></td>
        <td><b>HTTP</b></td>
        <td><b>Description</b></td>
    </tr>
    <tr>
    	<td><span style="color:red;">/api/hello?name={name}</span></td>
        <td>GET</td>
        <td>Print hello, <span style="color:red;">{name}</span> !</td>
    </tr>
</table>

List of user routes:

<table>
	<tr>
    	<td><b>Route</b></td>
        <td><b>HTTP</b></td>
        <td><b>Description</b></td>
    </tr>
    <tr>
    	<td><span style="color:red;">/api/users</span></td>
        <td>GET</td>
        <td>Get all the users</td>
    </tr>
    <tr>
    	<td><span style="color:red;">/api/users/:id</span></td>
        <td>GET</td>
        <td>Get a single user</td>
    </tr>
    <tr>
    	<td><span style="color:red;">/api/users</span></td>
        <td>POST</td>
        <td>Create a user</td>
    </tr>
    <tr>
    	<td><span style="color:red;">/api/users/:id</span></td>
        <td>DELETE</td>
        <td>Delete a user</td>
    </tr>
    <tr>
    	<td><span style="color:red;">/api/users/:id</span></td>
        <td>PUT</td>
        <td>Update a user with new info</td>
    </tr>
    <tr>
    	<td><span style="color:red;">/api/users/:id</span></td>
        <td>PATCH</td>
        <td>Update a user with specific new info</td>
    </tr>
</table>

List of filter routes:

<table>
	<tr>
    	<td><b>Route</b></td>
        <td><b>HTTP</b></td>
        <td><b>Description</b></td>
    </tr>
    <tr>
    	<td><span style="color:red;">/api/users?name="{name}"</span></td>
        <td>GET</td>
        <td>Get <span style="color:red;">{name}</span> match in users</td>
    </tr>
    <tr>
    	<td><span style="color:red;">/api/users?name="{na}"</span></td>
        <td>GET</td>
        <td>Get <span style="color:red;">{na}</span> like in users</td>
    </tr>
</table>

#### USAGE
with only npm:
<pre>npm install
npm start
npm run dev</pre>

Access the website via <code>http://localhost:3000</code> or API via <code>http://localhost:3000/api</code>.
