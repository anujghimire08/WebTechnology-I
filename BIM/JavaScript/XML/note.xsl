<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Note Details</title>
        <style>
          table { border-collapse: collapse; width: 50%; }
          th, td { border: 1px solid black; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <h2>Note</h2>
        <table>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>To</td>
            <td><xsl:value-of select="note/to"/></td>
          </tr>
          <tr>
            <td>From</td>
            <td><xsl:value-of select="note/from"/></td>
          </tr>
          <tr>
            <td>Heading</td>
            <td><xsl:value-of select="note/heading"/></td>
          </tr>
          <tr>
            <td>Body</td>
            <td><xsl:value-of select="note/body"/></td>
          </tr>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>