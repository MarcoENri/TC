import React from "react";
import { useTable } from "@refinedev/core";
import { List } from "@refinedev/antd";
import { Table } from "antd";

const ProductsList: React.FC = () => {
    const { tableQueryResult } = useTable({
        resource: "products",
    });

    const { data, isLoading } = tableQueryResult;
    const products = data?.data ?? [];

    return (
        <List>
            <Table dataSource={products} loading={isLoading} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="name" title="Name" />
                <Table.Column dataIndex="description" title="Description" />
                <Table.Column dataIndex="price" title="Price" />
            </Table>
        </List>
    );
};

export default ProductsList;
