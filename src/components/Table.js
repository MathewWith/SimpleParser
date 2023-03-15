import { useState } from "react";
import { createStyles, Table, ScrollArea, rem } from "@mantine/core";
import { Navigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

export function TableScrollArea({ data = [] }) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data?.map((row) => (
    <tr key={row.number}>
      <td>{row.number}</td>
      <td>{row.status}</td>
      <td>{row.facebook_login}</td>
      <td>{row.facebook_password}</td>
      <td>{row.facebook_token}</td>
      <td>{row.email_login}</td>
      <td>{row.email_password}</td>
      <td>{row.useragent}</td>
      <td>{row.cookies}</td>
      <td>{row.notes}</td>
    </tr>
  ));

  return (
    <ScrollArea
      h={300}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      {
        !data && <Navigate to="/" replace={true} />
        //Таким способом предусматриваю перезагрузку страницы
        //Если страница перезагрузится, data очистится и нас перенесёт на главную страницу
      }

      <Table miw={1200}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Facebook login</th>
            <th>Facebook password</th>
            <th>Facebook token</th>
            <th>Email login</th>
            <th>Email password</th>
            <th>Useragent</th>
            <th>Cookies</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
