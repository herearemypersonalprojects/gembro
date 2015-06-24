<#-- @ftlvariable name="properties" type="java.util.List<info.lequocanh.gembro.domain.good.Property>" -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>List of Properties</title>
</head>
<body>

<h1>List of Properties</h1>

<table>
    <thead>
    <tr>
        <th>Address</th>
        <th>City</th>
    </tr>
    </thead>
    <tbody>
    <#list properties as property>
    <tr>
        <td><a href="/property/${property.id}">${property.address}</a></td>
        <td>${property.city}</td>
    </tr>
    </#list>
    </tbody>
</table>
</body>
</html>