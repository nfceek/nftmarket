import { useState, useEffect } from 'react';
import { Section } from '../../../layout/Section';
import { AddEdit } from '../../../components/users/AddEdit';
import { Spinner } from '../../../components/Spinner';
import { userService, alertService } from '../../../services';

export default Edit;

function Edit({ id }) {
    const [user, setUser] = useState(null);
    if (!userService.userValue.firstname == null) {
        setAuthorized(true);
    }
    useEffect(() => {
        // fetch user and set default form values if in edit mode
        userService.getById(id)
            .then(x => setUser(x))
            .catch(alertService.error)
            
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Section>
            
            <h1>Edit User</h1>
            {user ? <AddEdit user={user} /> : <Spinner /> }
        </Section>
    );
}

export async function getServerSideProps({ params }) {
    return {
        props: { id: params.id }
    }
}
