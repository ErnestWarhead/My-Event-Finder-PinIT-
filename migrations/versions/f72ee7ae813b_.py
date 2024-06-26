"""empty message

Revision ID: f72ee7ae813b
Revises: 48ff987abdd4
Create Date: 2024-06-10 15:35:41.442274

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f72ee7ae813b'
down_revision = '48ff987abdd4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('favorites', schema=None) as batch_op:
        batch_op.alter_column('description',
               existing_type=sa.VARCHAR(length=1000),
               type_=sa.String(length=255),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('favorites', schema=None) as batch_op:
        batch_op.alter_column('description',
               existing_type=sa.String(length=255),
               type_=sa.VARCHAR(length=1000),
               existing_nullable=True)

    # ### end Alembic commands ###
