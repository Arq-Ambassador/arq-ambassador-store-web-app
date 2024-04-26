import React, {useEffect, useState} from 'react';

import Layout from "../components/Layout";
import { CHECKOUT_WEB_APP_URL, coreService } from '../axios/hostsInstances';

const Stats = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        (
            async () => {
                const {data} = await coreService.get('stats');

                setStats(data);
            }
        )();
    }, []);
    return (
        <Layout>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Revenue</th>
                    </tr>
                    </thead>
                    <tbody>
                    {stats.map((s: { code: string, revenue: number }, index) => {
                        return (
                            <tr key={index}>
                                <td>{`${CHECKOUT_WEB_APP_URL}/${s.code}`}</td>
                                <td>{s.code}</td>
                                <td>{s.revenue}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Stats;
